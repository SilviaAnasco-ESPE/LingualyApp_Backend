import express from 'express';
import {getAllScenarios, createScenarios} from '../controllers/scenariosController.js';
const router = express.Router();

// Route to get all scenarios
router.get('/', getAllScenarios);

// Route to add a new scenario
router.post('/', createScenarios);

export default router;
