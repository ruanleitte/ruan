import { users, type User, type InsertUser, pets, type Pet, type InsertPet, meetings, type Meeting, type InsertMeeting, participants, type Participant, type InsertParticipant } from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  listUsers(): Promise<User[]>;
  
  // Pet methods
  getPet(id: number): Promise<Pet | undefined>;
  createPet(pet: InsertPet): Promise<Pet>;
  listPets(ownerId: number): Promise<Pet[]>;
  
  // Meeting methods
  getMeeting(id: number): Promise<Meeting | undefined>;
  createMeeting(meeting: InsertMeeting): Promise<Meeting>;
  listMeetings(): Promise<Meeting[]>;
  listUserMeetings(userId: number): Promise<Meeting[]>;
  
  // Participant methods
  getParticipant(id: number): Promise<Participant | undefined>;
  createParticipant(participant: InsertParticipant): Promise<Participant>;
  listParticipants(meetingId: number): Promise<Participant[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private pets: Map<number, Pet>;
  private meetings: Map<number, Meeting>;
  private participants: Map<number, Participant>;
  
  private userCurrentId: number;
  private petCurrentId: number;
  private meetingCurrentId: number;
  private participantCurrentId: number;

  constructor() {
    this.users = new Map();
    this.pets = new Map();
    this.meetings = new Map();
    this.participants = new Map();
    
    this.userCurrentId = 1;
    this.petCurrentId = 1;
    this.meetingCurrentId = 1;
    this.participantCurrentId = 1;
    
    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Create a sample user for demo purposes
    const sampleUser: InsertUser = {
      username: "demo_user",
      password: "password",
      name: "Alex Thompson",
      email: "alex@example.com",
      timezone: "America/Chicago",
      location: "Chicago, USA"
    };
    this.createUser(sampleUser);
    
    // Create some sample pets
    const samplePets: InsertPet[] = [
      {
        name: "Max",
        type: "dog",
        breed: "Golden Retriever",
        age: 3,
        ownerId: 1,
        imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80",
        isVaccinated: true,
        temperament: "friendly"
      },
      {
        name: "Luna",
        type: "cat",
        breed: "Siamese Cat",
        age: 2,
        ownerId: 1,
        imageUrl: "https://images.unsplash.com/photo-1574144113084-b6f450cc5e0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300&q=80",
        isVaccinated: true,
        temperament: "shy"
      }
    ];
    
    samplePets.forEach(pet => this.createPet(pet));
    
    // Create sample meetings
    const now = new Date();
    const today3pm = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15, 0, 0);
    const tomorrow10am = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 10, 0, 0);
    const nextWeek2pm = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 14, 0, 0);
    const futureDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 10, 13, 0, 0);
    
    const sampleMeetings: InsertMeeting[] = [
      {
        title: "Dog Training Session",
        description: "Weekly training session with professional trainer",
        date: today3pm,
        hostId: 1,
        hostTimezone: "America/Chicago",
        location: "Local Park",
        petType: "dog"
      },
      {
        title: "Cat Grooming",
        description: "Monthly grooming session",
        date: tomorrow10am,
        hostId: 1,
        hostTimezone: "America/Chicago",
        location: "Pet Salon",
        petType: "cat"
      },
      {
        title: "Vet Appointment",
        description: "Regular checkup",
        date: nextWeek2pm,
        hostId: 1,
        hostTimezone: "America/Chicago",
        location: "Animal Clinic",
        petType: "dog"
      },
      {
        title: "Doggy Playdate at the Park",
        description: "Fun playdate for dogs at the central park",
        date: futureDate,
        hostId: 1,
        hostTimezone: "America/Chicago",
        location: "Central Park",
        petType: "dog"
      }
    ];
    
    const meetingIds = sampleMeetings.map(meeting => this.createMeeting(meeting).id);
    
    // Create sample participants
    const sampleParticipants: InsertParticipant[] = [
      {
        meetingId: meetingIds[3], // Doggy Playdate
        userId: 1,
        role: "pet_owner",
        timezone: "America/Chicago"
      }
    ];
    
    // Sample remote participants
    const sampleRemoteParticipants = [
      {
        meetingId: meetingIds[3],
        name: "Sarah Johnson",
        timezone: "Europe/London",
        location: "London, UK",
        role: "pet_owner"
      },
      {
        meetingId: meetingIds[3],
        name: "Michael Stevens",
        timezone: "America/Los_Angeles",
        location: "Los Angeles, USA",
        role: "vet"
      },
      {
        meetingId: meetingIds[3],
        name: "John Miller",
        timezone: "America/New_York",
        location: "New York, USA",
        role: "pet_owner"
      },
      {
        meetingId: meetingIds[3],
        name: "Emma Davis",
        timezone: "Australia/Sydney",
        location: "Sydney, Australia",
        role: "pet_owner"
      }
    ];
    
    // Create remote users and add them as participants
    sampleRemoteParticipants.forEach(remote => {
      const user: InsertUser = {
        username: remote.name.toLowerCase().replace(/\s/g, '_'),
        password: "password",
        name: remote.name,
        email: `${remote.name.toLowerCase().replace(/\s/g, '.')}@example.com`,
        timezone: remote.timezone,
        location: remote.location
      };
      
      const createdUser = this.createUser(user);
      
      const participant: InsertParticipant = {
        meetingId: remote.meetingId,
        userId: createdUser.id,
        role: remote.role as string,
        timezone: remote.timezone
      };
      
      this.createParticipant(participant);
    });
    
    sampleParticipants.forEach(participant => this.createParticipant(participant));
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async listUsers(): Promise<User[]> {
    return Array.from(this.users.values());
  }
  
  // Pet methods
  async getPet(id: number): Promise<Pet | undefined> {
    return this.pets.get(id);
  }
  
  async createPet(insertPet: InsertPet): Promise<Pet> {
    const id = this.petCurrentId++;
    const pet: Pet = { ...insertPet, id };
    this.pets.set(id, pet);
    return pet;
  }
  
  async listPets(ownerId: number): Promise<Pet[]> {
    return Array.from(this.pets.values()).filter(pet => pet.ownerId === ownerId);
  }
  
  // Meeting methods
  async getMeeting(id: number): Promise<Meeting | undefined> {
    return this.meetings.get(id);
  }
  
  async createMeeting(insertMeeting: InsertMeeting): Promise<Meeting> {
    const id = this.meetingCurrentId++;
    const meeting: Meeting = { ...insertMeeting, id };
    this.meetings.set(id, meeting);
    return meeting;
  }
  
  async listMeetings(): Promise<Meeting[]> {
    return Array.from(this.meetings.values());
  }
  
  async listUserMeetings(userId: number): Promise<Meeting[]> {
    // Get all participants for the user
    const userParticipations = Array.from(this.participants.values())
      .filter(participant => participant.userId === userId)
      .map(participant => participant.meetingId);
    
    // Get all meetings where user is host or participant
    return Array.from(this.meetings.values())
      .filter(meeting => 
        meeting.hostId === userId || userParticipations.includes(meeting.id)
      );
  }
  
  // Participant methods
  async getParticipant(id: number): Promise<Participant | undefined> {
    return this.participants.get(id);
  }
  
  async createParticipant(insertParticipant: InsertParticipant): Promise<Participant> {
    const id = this.participantCurrentId++;
    const participant: Participant = { ...insertParticipant, id };
    this.participants.set(id, participant);
    return participant;
  }
  
  async listParticipants(meetingId: number): Promise<Participant[]> {
    return Array.from(this.participants.values())
      .filter(participant => participant.meetingId === meetingId);
  }
}

export const storage = new MemStorage();
