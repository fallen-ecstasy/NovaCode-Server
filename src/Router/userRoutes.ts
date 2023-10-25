import express from 'express';
import { getUserName, currentUserProfile,  editUserProfile} from '../Controllers/users';
const router = express.Router();


// Read all problems
router.get('/user/profile/:username', getUserName);

// Route to retrieve a specific problem by category
router.get('/user/myprofile', currentUserProfile);

// Get a specific problem by ID/Title
router.get('/user/editprofile', editUserProfile);

export default router;
