import express, { Request, Response } from 'express';
import Problem from '../DB/Models/ProblemModel';

const router = express.Router();

// Route to get all problems
router.get('/problems', async (req: Request, res: Response) => {
  try {
    const problems = await Problem.find();
    console.log(problems)
    res.json(problems);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
    console.log(error)
  }
});

// Route to get problems by category
router.get('/problems/category/:category', async (req: Request, res: Response) => {
  const category: string = req.params.category;
  try {
    const problems = await Problem.find({ topics: category });
    res.json(problems);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// Route to retrieve a specific problem by ID
router.get('/problems/:id', async (req: Request, res: Response) => {
  const problemId: string = req.params.id;
  try {
    const problem = await Problem.findById(problemId);
    if (!problem) {
      return res.status(404).json({ error: 'Problem not found' });
    }
    res.json(problem);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// Route to retrieve a specific problem by title
router.get('/problems/title/:title', async (req: Request, res: Response) => {
  const problemTitle: string = req.params.title;
  try {
    const problem = await Problem.findOne({ title: problemTitle });
    if (!problem) {
      return res.status(404).json({ error: 'Problem not found' });
    }
    res.json(problem);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

export default router;
