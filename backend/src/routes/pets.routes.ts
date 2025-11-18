import express from 'express'
import type { Express, Router, Request, Response } from 'express'

import { getPets, getPetById } from '../controllers/pets.controllers.ts';
import { validateNumericId } from '../middleware/pets.middleware.ts';

export const petRouter: Router = express.Router();

petRouter.get('/', getPets)
petRouter.get('/:id', validateNumericId, getPetById)