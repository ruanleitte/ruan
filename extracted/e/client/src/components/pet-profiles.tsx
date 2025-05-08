import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Plus } from "lucide-react";
import { Pet } from "@shared/schema";
import { Link } from "wouter";

interface PetCardProps {
  pet: Pet;
}

const PetCard = ({ pet }: PetCardProps) => {
  return (
    <li className="py-4 flex">
      <Avatar className="h-16 w-16">
        <AvatarImage src={pet.imageUrl} alt={pet.name} />
        <AvatarFallback>{pet.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{pet.name}</p>
        <p className="text-xs text-gray-500">
          {pet.breed || pet.type}, {pet.age} {pet.age === 1 ? "year" : "years"}
        </p>
        <div className="mt-1 flex items-center space-x-2">
          {pet.isVaccinated && (
            <Badge variant="success" className="text-xs">
              Vaccinated
            </Badge>
          )}
          {pet.temperament && (
            <Badge 
              variant={
                pet.temperament === "friendly" ? "default" : 
                pet.temperament === "shy" ? "warning" : "secondary"
              } 
              className="text-xs"
            >
              {pet.temperament}
            </Badge>
          )}
        </div>
      </div>
    </li>
  );
};

const PetProfiles = () => {
  const { data: pets, isLoading, error } = useQuery({
    queryKey: ["/api/pets"],
  });

  return (
    <Card className="mb-8">
      <CardHeader className="border-b border-gray-200 bg-gray-800 px-4 py-4 sm:px-6">
        <CardTitle className="text-lg leading-6 font-medium text-white flex items-center">
          <User className="w-5 h-5 mr-2" />
          My Pet Profiles
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 py-5 sm:p-6">
        {isLoading ? (
          <div className="text-center py-4">Loading pet profiles...</div>
        ) : error ? (
          <div className="text-center py-4 text-red-500">Failed to load pets</div>
        ) : pets && pets.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {pets.map((pet: Pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </ul>
        ) : (
          <div className="text-center py-4 text-gray-500">No pets added yet</div>
        )}
        <div className="mt-4">
          <Link href="/my-pets/add">
            <Button variant="outline" className="w-full inline-flex justify-center items-center">
              <Plus className="-ml-1 mr-2 h-5 w-5 text-gray-400" />
              Add New Pet
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default PetProfiles;
