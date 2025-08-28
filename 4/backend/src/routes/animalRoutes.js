import express from 'express';
import { getAnimals, getAnimalsByType, addNewAnimal } from "../controllers/animalController.js";

/**
 * Routes for animal-related endpoints.
 * 1. GET all animals
 * 2. GET by type of animal (bird, fish, reptile)
 * 3. POST add a new animal to database
 */

export const AnimalRoutes = express.Router();

// Get all animals (status code 200: ok, 404: not found)
AnimalRoutes.get("/", getAnimals);

// Get animals by type
AnimalRoutes.get("/:animalType", getAnimalsByType);

// Add a new animal (staus code 201: created)
AnimalRoutes.post("/", addNewAnimal);