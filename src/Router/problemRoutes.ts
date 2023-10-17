import express from 'express';
import { getAllProblems, getByCategory, getById, getByTitle, insertProblem, updateProblemById } from '../Controllers/problems';
const router = express.Router();


// Read all problems
router.get('/problems', getAllProblems);

// Route to retrieve a specific problem by category
router.get('/problems/category/:category', getByCategory);

// Route to retrieve a specific problem by title
router.get('/problems/title/:title', getByTitle);

// Read a specific problem by ID
router.get('/problems/:id', getById);

//========Create Update Delete Problems=========

// Update a specific problem by ID
router.put('/problems/:id', updateProblemById);

// Create a new problem
router.post('/problems', insertProblem);

// Delete a specific problem by ID
router.delete('/problems/:id',);

export default router;
