import type { Request, Response } from 'express'

import { type Pet, pets } from '../data/data.ts';

export const getPets = (
    req: Request<{}, unknown, {}, Partial<{ 
        species: string, 
        adopted: 'true' | 'false',
        min_age: string,
        max_age: string
    }>>, 
    res: Response<Pet[] | { message: string }>
): void => {
    const { species, adopted, min_age, max_age } = req.query;

    if(!(species || adopted || min_age || max_age)) {
        res.json(pets)
        return;
    }

    let petDetails: Pet[] | undefined = pets;

    if(species) {
        petDetails = petDetails.filter((pet: Pet): boolean => pet.species.toLowerCase() === species);
    }
    if(adopted) {
        petDetails = petDetails.filter((pet: Pet): boolean => pet.adopted === JSON.parse(adopted));
    }
    if(min_age) {
        petDetails = petDetails.filter((pet: Pet): boolean => pet.age <= JSON.parse(min_age));
    }
    if(max_age) {
        petDetails = petDetails.filter((pet: Pet): boolean => pet.age >= JSON.parse(max_age));
    }

    if(!petDetails) {
        res.status(404).json({ message: "No pet is found"})
        return;
    }
    
    res.json(petDetails);
}

export const getPetById = (req: Request<{ id: string }>, res: Response<Pet | { message: string }>): void => {
    const { id } = req.params;
    const petDetails: Pet | undefined = pets.find((pet: Pet): boolean => pet.id.toString() === id);

    if(!petDetails) {
        res.status(404).json({ message: `No pet is found with the ${id}`})
    }

    res.json(petDetails);
}