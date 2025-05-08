import { useQuery, useMutation } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Pet } from "@shared/schema";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { useForm } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { insertPetSchema } from "@shared/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = insertPetSchema.extend({
  imageUrl: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const PetForm = ({ onSubmit, defaultValues, isEditing = false }: any) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pet Name</FormLabel>
              <FormControl>
                <Input placeholder="Max" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pet Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="dog">Dog</SelectItem>
                    <SelectItem value="cat">Cat</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age (years)</FormLabel>
                <FormControl>
                  <Input type="number" min="0" max="30" {...field} value={field.value || ''} onChange={e => field.onChange(e.target.value === '' ? undefined : parseInt(e.target.value))} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="breed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Breed</FormLabel>
              <FormControl>
                <Input placeholder="Golden Retriever" {...field} value={field.value || ''} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/pet.jpg" {...field} value={field.value || ''} />
              </FormControl>
              <FormDescription>
                Enter a URL for your pet's photo
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="isVaccinated"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                <div className="space-y-0.5">
                  <FormLabel>Vaccinated</FormLabel>
                  <FormDescription>
                    Is your pet vaccinated?
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="temperament"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Temperament</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value || ''}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select temperament" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="shy">Shy</SelectItem>
                    <SelectItem value="energetic">Energetic</SelectItem>
                    <SelectItem value="calm">Calm</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="ownerId"
          render={({ field }) => (
            <input type="hidden" {...field} />
          )}
        />
        
        <DialogFooter>
          <Button type="submit">{isEditing ? "Save Changes" : "Add Pet"}</Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

const PetCard = ({ pet }: { pet: Pet }) => {
  const { toast } = useToast();

  return (
    <Card className="mb-4">
      <CardContent className="pt-6">
        <div className="flex items-start">
          <Avatar className="h-20 w-20">
            <AvatarImage src={pet.imageUrl} alt={pet.name} />
            <AvatarFallback className="text-xl">{pet.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="ml-4 flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{pet.name}</h3>
                <p className="text-sm text-gray-500">
                  {pet.breed || pet.type}, {pet.age} {pet.age === 1 ? "year" : "years"}
                </p>
              </div>
              <div className="space-x-2">
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 text-red-600 hover:text-red-700">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="mt-3 flex flex-wrap gap-2">
              {pet.isVaccinated && (
                <Badge variant="success">Vaccinated</Badge>
              )}
              {pet.temperament && (
                <Badge 
                  variant={
                    pet.temperament === "friendly" ? "default" : 
                    pet.temperament === "shy" ? "warning" : 
                    pet.temperament === "energetic" ? "outline" : "secondary"
                  }
                >
                  {pet.temperament}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const MyPets = () => {
  const { toast } = useToast();
  const { data: user } = useQuery({
    queryKey: ["/api/me"],
  });
  
  const { data: pets, isLoading, error } = useQuery({
    queryKey: ["/api/pets"],
  });
  
  const createPetMutation = useMutation({
    mutationFn: async (data: FormData) => {
      return await apiRequest("POST", "/api/pets", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/pets"] });
      toast({
        title: "Pet added!",
        description: "Your pet has been successfully added.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to add pet. Please try again.",
        variant: "destructive",
      });
    },
  });
  
  const handleSubmit = (data: FormData) => {
    createPetMutation.mutate(data);
  };
  
  const defaultValues = {
    name: "",
    type: "dog",
    breed: "",
    age: undefined,
    ownerId: user?.id || 1,
    imageUrl: "",
    isVaccinated: false,
    temperament: ""
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Pets</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center">
              <Plus className="mr-2 h-4 w-4" />
              <span>Add Pet</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a New Pet</DialogTitle>
              <DialogDescription>
                Enter your pet's details below.
              </DialogDescription>
            </DialogHeader>
            <PetForm onSubmit={handleSubmit} defaultValues={defaultValues} />
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid md:grid-cols-1 gap-6">
        {isLoading ? (
          <p className="text-center">Loading pets...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error loading pets</p>
        ) : pets && pets.length > 0 ? (
          pets.map((pet: Pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))
        ) : (
          <div className="text-center py-8">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No pets found</h3>
            <p className="text-gray-500 mb-4">You haven't added any pets yet.</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Add Your First Pet</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add a New Pet</DialogTitle>
                  <DialogDescription>
                    Enter your pet's details below.
                  </DialogDescription>
                </DialogHeader>
                <PetForm onSubmit={handleSubmit} defaultValues={defaultValues} />
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPets;
