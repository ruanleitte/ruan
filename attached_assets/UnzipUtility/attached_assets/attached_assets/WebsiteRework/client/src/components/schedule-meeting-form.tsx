import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { insertMeetingSchema } from "@shared/schema";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { availableTimezones } from "@/lib/timezone-utils";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, Clock, Plus, User } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

// Extend the schema for form validation
const formSchema = insertMeetingSchema.extend({
  date: z.date({
    required_error: "A date is required",
  }),
  time: z.string({
    required_error: "A time is required",
  }),
});

// Combined form data type
type FormData = z.infer<typeof formSchema>;

const ScheduleMeetingForm = () => {
  const { toast } = useToast();
  
  // Get user data for default values
  const { data: user } = useQuery({
    queryKey: ["/api/me"],
  });
  
  // Get all users for participant selection
  const { data: users } = useQuery({
    queryKey: ["/api/users"],
  });
  
  const defaultValues = {
    title: "",
    description: "",
    date: new Date(),
    time: "15:00",
    hostId: user?.id || 1,
    hostTimezone: user?.timezone || "America/Chicago",
    location: "",
    petType: "dog",
  };
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  
  const createMeetingMutation = useMutation({
    mutationFn: async (data: any) => {
      // Combine date and time
      const meetingDate = new Date(data.date);
      const [hours, minutes] = data.time.split(':').map(Number);
      meetingDate.setHours(hours, minutes, 0, 0);
      
      // Prepare meeting data
      const meetingData = {
        title: data.title,
        description: data.description,
        date: meetingDate.toISOString(),
        hostId: data.hostId,
        hostTimezone: data.hostTimezone,
        location: data.location,
        petType: data.petType,
      };
      
      return await apiRequest("POST", "/api/meetings", meetingData);
    },
    onSuccess: async (response) => {
      const meeting = await response.json();
      
      // Add host as participant
      await apiRequest("POST", `/api/meetings/${meeting.id}/participants`, {
        userId: user?.id || 1,
        role: "pet_owner",
        timezone: user?.timezone || "America/Chicago",
      });
      
      queryClient.invalidateQueries({ queryKey: ["/api/meetings"] });
      toast({
        title: "Meeting created!",
        description: "Your meeting has been successfully scheduled.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create meeting. Please try again.",
        variant: "destructive",
      });
    },
  });
  
  function onSubmit(data: FormData) {
    createMeetingMutation.mutate(data);
  }
  
  const [selectedParticipants, setSelectedParticipants] = useState<any[]>([]);
  
  const addParticipant = (userId: number) => {
    const userToAdd = users?.find((u: any) => u.id === userId);
    if (userToAdd && !selectedParticipants.find(p => p.id === userToAdd.id)) {
      setSelectedParticipants([...selectedParticipants, userToAdd]);
    }
  };

  return (
    <Card className="mb-8">
      <CardHeader className="border-b border-gray-200 bg-primary-600 px-4 py-4 sm:px-6">
        <CardTitle className="text-lg leading-6 font-medium text-white flex items-center">
          <CalendarIcon className="w-5 h-5 mr-2" />
          Schedule a New Meeting
        </CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="px-4 py-5 sm:p-6">
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meeting Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Doggy Playdate at the Park" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-3">
                      <FormLabel>Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date(new Date().setHours(0, 0, 0, 0))
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-3">
                      <FormLabel>Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="hostTimezone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Time Zone</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {availableTimezones.map((tz) => (
                          <SelectItem key={tz.value} value={tz.value}>
                            {tz.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="petType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Pet Type</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="dog" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Dog
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="cat" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Cat
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="other" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Other
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Central Park, Vet Clinic, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meeting Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Details about the pet meetup..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="border-t border-gray-200 pt-5">
                <div className="flex justify-between">
                  <h4 className="text-sm font-medium text-gray-700">Add Participants</h4>
                  <div>
                    <Select
                      onValueChange={(value) => addParticipant(parseInt(value))}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select user" />
                      </SelectTrigger>
                      <SelectContent>
                        {users?.filter((u: any) => !selectedParticipants.find(p => p.id === u.id) && u.id !== user?.id).map((u: any) => (
                          <SelectItem key={u.id} value={u.id.toString()}>
                            {u.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="mt-2">
                  {/* Current user */}
                  {user && (
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                          <span className="text-primary-600 font-medium">You</span>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-700">{user.name}</p>
                          <p className="text-xs text-gray-500">{user.location}</p>
                        </div>
                      </div>
                      <Select defaultValue="pet_owner" disabled>
                        <SelectTrigger className="w-[120px] text-xs">
                          <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pet_owner">Pet Owner</SelectItem>
                          <SelectItem value="vet">Vet</SelectItem>
                          <SelectItem value="trainer">Trainer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  
                  {/* Selected participants */}
                  {selectedParticipants.map((participant) => (
                    <div key={participant.id} className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>{participant.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-700">{participant.name}</p>
                          <p className="text-xs text-gray-500">{participant.location}</p>
                        </div>
                      </div>
                      <Select defaultValue="pet_owner">
                        <SelectTrigger className="w-[120px] text-xs">
                          <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pet_owner">Pet Owner</SelectItem>
                          <SelectItem value="vet">Vet</SelectItem>
                          <SelectItem value="trainer">Trainer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="px-4 py-3 bg-gray-50 sm:px-6 flex justify-between items-center">
            <Button type="submit" disabled={createMeetingMutation.isPending}>
              {createMeetingMutation.isPending ? "Creating..." : "Create Meeting"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

import { useState } from "react";

export default ScheduleMeetingForm;
