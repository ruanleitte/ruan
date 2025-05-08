import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Pet, InsertPet } from "@shared/schema";

export function usePets() {
  const { 
    data: pets = [], 
    isLoading, 
    error 
  } = useQuery<Pet[]>({
    queryKey: ["/api/pets"],
  });
  
  const createPetMutation = useMutation({
    mutationFn: async (petData: Omit<InsertPet, "ownerId"> & { imageUrl?: string }) => {
      // Get user data for default values (in a real app, this would be from auth context)
      const userResponse = await fetch("/api/me", { credentials: "include" });
      const userData = await userResponse.json();
      
      // Create pet with proper data
      const dataToSend: InsertPet = {
        name: petData.name,
        type: petData.type,
        breed: petData.breed || "",
        age: petData.age,
        ownerId: userData.id || 1, // Fallback to ID 1 if user data not available
        imageUrl: petData.imageUrl || "",
        isVaccinated: petData.isVaccinated || false,
        temperament: petData.temperament || "",
      };
      
      const createResponse = await apiRequest("POST", "/api/pets", dataToSend);
      return await createResponse.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/pets"] });
    },
  });
  
  return {
    pets,
    isLoading,
    error,
    createPet: createPetMutation.mutate,
    isCreating: createPetMutation.isPending,
    createError: createPetMutation.error,
  };
}

export function usePet(id: number | undefined) {
  const enabled = id !== undefined;
  
  const { 
    data: pet, 
    isLoading, 
    error 
  } = useQuery<Pet>({
    queryKey: ["/api/pets", id],
    enabled,
  });
  
  return {
    pet,
    isLoading,
    error,
  };
}
