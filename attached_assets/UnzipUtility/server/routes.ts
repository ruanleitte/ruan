import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMeetingSchema, insertParticipantSchema, insertPetSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  
  // User endpoints
  app.get("/api/me", async (req, res) => {
    // For simplicity, use a fixed user ID (1) since we're not implementing auth
    const userId = 1;
    const user = await storage.getUser(userId);
    
    if (user) {
      // Don't send password with user data
      const { password, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  });
  
  app.get("/api/users", async (req, res) => {
    const users = await storage.listUsers();
    const usersWithoutPasswords = users.map(({ password, ...user }) => user);
    res.json(usersWithoutPasswords);
  });
  
  app.get("/api/users/:id", async (req, res) => {
    const userId = parseInt(req.params.id);
    
    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    
    const user = await storage.getUser(userId);
    
    if (user) {
      // Don't send password with user data
      const { password, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  });
  
  // Pet endpoints
  app.get("/api/pets", async (req, res) => {
    // For simplicity, use a fixed user ID (1) since we're not implementing auth
    const userId = 1;
    const pets = await storage.listPets(userId);
    res.json(pets);
  });
  
  app.post("/api/pets", async (req, res) => {
    try {
      const validatedData = insertPetSchema.parse(req.body);
      const pet = await storage.createPet(validatedData);
      res.status(201).json(pet);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid pet data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create pet" });
      }
    }
  });
  
  app.get("/api/pets/:id", async (req, res) => {
    const petId = parseInt(req.params.id);
    
    if (isNaN(petId)) {
      return res.status(400).json({ message: "Invalid pet ID" });
    }
    
    const pet = await storage.getPet(petId);
    
    if (pet) {
      res.json(pet);
    } else {
      res.status(404).json({ message: "Pet not found" });
    }
  });
  
  // Meeting endpoints
  app.get("/api/meetings", async (req, res) => {
    // For simplicity, use a fixed user ID (1) since we're not implementing auth
    const userId = 1;
    const meetings = await storage.listUserMeetings(userId);
    res.json(meetings);
  });
  
  app.post("/api/meetings", async (req, res) => {
    try {
      const validatedData = insertMeetingSchema.parse(req.body);
      const meeting = await storage.createMeeting(validatedData);
      res.status(201).json(meeting);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid meeting data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create meeting" });
      }
    }
  });
  
  app.get("/api/meetings/:id", async (req, res) => {
    const meetingId = parseInt(req.params.id);
    
    if (isNaN(meetingId)) {
      return res.status(400).json({ message: "Invalid meeting ID" });
    }
    
    const meeting = await storage.getMeeting(meetingId);
    
    if (meeting) {
      res.json(meeting);
    } else {
      res.status(404).json({ message: "Meeting not found" });
    }
  });
  
  // Participant endpoints
  app.get("/api/meetings/:id/participants", async (req, res) => {
    const meetingId = parseInt(req.params.id);
    
    if (isNaN(meetingId)) {
      return res.status(400).json({ message: "Invalid meeting ID" });
    }
    
    // Check if the meeting exists
    const meeting = await storage.getMeeting(meetingId);
    
    if (!meeting) {
      return res.status(404).json({ message: "Meeting not found" });
    }
    
    const participants = await storage.listParticipants(meetingId);
    
    // Get user details for each participant
    const participantsWithUserDetails = await Promise.all(
      participants.map(async (participant) => {
        const user = await storage.getUser(participant.userId);
        return {
          ...participant,
          user: user ? {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            timezone: user.timezone,
            location: user.location
          } : undefined
        };
      })
    );
    
    res.json(participantsWithUserDetails);
  });
  
  app.post("/api/meetings/:id/participants", async (req, res) => {
    const meetingId = parseInt(req.params.id);
    
    if (isNaN(meetingId)) {
      return res.status(400).json({ message: "Invalid meeting ID" });
    }
    
    // Check if the meeting exists
    const meeting = await storage.getMeeting(meetingId);
    
    if (!meeting) {
      return res.status(404).json({ message: "Meeting not found" });
    }
    
    try {
      const validatedData = insertParticipantSchema.parse({
        ...req.body,
        meetingId
      });
      
      const participant = await storage.createParticipant(validatedData);
      res.status(201).json(participant);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid participant data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to add participant" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
