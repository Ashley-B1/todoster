import { Router } from 'express';
import { getUser, deleteUser, updateUser } from '../controllers/user';

const router: Router = Router();

router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

// test route (not meant for production)
// router.get('/', getAllUsers);

export default router;
