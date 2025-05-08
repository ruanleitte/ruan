import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  timezone: text("timezone").notNull(),
  location: text("location"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  name: true,
  email: true,
  timezone: true,
  location: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const pets = pgTable("pets", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(), // dog, cat, etc.
  breed: text("breed"),
  age: integer("age"),
  ownerId: integer("owner_id").notNull(),
  imageUrl: text("image_url"),
  isVaccinated: boolean("is_vaccinated").default(false),
  temperament: text("temperament"), // friendly, shy, etc.
});

export const insertPetSchema = createInsertSchema(pets).pick({
  name: true,
  type: true,
  breed: true,
  age: true,
  ownerId: true,
  imageUrl: true,
  isVaccinated: true,
  temperament: true,
});

export type InsertPet = z.infer<typeof insertPetSchema>;
export type Pet = typeof pets.$inferSelect;

export const meetings = pgTable("meetings", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  date: timestamp("date").notNull(),
  hostId: integer("host_id").notNull(),
  hostTimezone: text("host_timezone").notNull(),
  location: text("location"),
  petType: text("pet_type"),
});

export const insertMeetingSchema = createInsertSchema(meetings).pick({
  title: true,
  description: true,
  date: true,
  hostId: true,
  hostTimezone: true,
  location: true,
  petType: true,
});

export type InsertMeeting = z.infer<typeof insertMeetingSchema>;
export type Meeting = typeof meetings.$inferSelect;

export const participants = pgTable("participants", {
  id: serial("id").primaryKey(),
  meetingId: integer("meeting_id").notNull(),
  userId: integer("user_id").notNull(),
  role: text("role").default("pet_owner"), // pet_owner, vet, trainer
  timezone: text("timezone").notNull(),
});

export const insertParticipantSchema = createInsertSchema(participants).pick({
  meetingId: true,
  userId: true,
  role: true,
  timezone: true,
});

export type InsertParticipant = z.infer<typeof insertParticipantSchema>;
export type Participant = typeof participants.$inferSelect;
