import * as animalService from "../services/animalServices.js";

export const getAnimals = async (req, res, next) => {
  try {
    const { data } = await animalService.getAllAnimals();

    if (!data.length) {
      res.status(404).json({ message: "No animals found" });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

export const getAnimalsByType = async (req, res, next) => {
  try {
    const type = req.params.animalType;
    const { data } = await animalService.getAllAnimalsByType(type);
    if (!data.length) {
      res.status(404).json({ message: "No animals found" });
    }
    res.status(200).json(animals);
  } catch (err) {
    next(err);
  }
};

export const addNewAnimal = async (req, res, next) => {
  try {
    const animal = req.body.animal; //JSON
    const { data } = await animalService.addNewAnimal(animal);
    if (!data.length) {
      res.status(404).json({ message: "No animals found" });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};
