import express from 'express';
import { deleteProblemById, getAllProblems, getByCategory, getByIdOrTitle, insertProblem, updateProblemById } from '../Controllers/problems';
const router = express.Router();





// Read all problems
router.get('/problems', getAllProblems);

// Route to retrieve a specific problem by category
router.get('/problems/category/:category', getByCategory);

// Get a specific problem by ID/Title
router.get('/problems/:param', getByIdOrTitle)

//========Create Update Delete Problems=========

// Update a specific problem by ID
router.put('/problems/:id', updateProblemById);
// Create a new problem
router.post('/problems', insertProblem);

// Delete a specific problem by ID
router.delete('/problems/:id', deleteProblemById);

export default router;
