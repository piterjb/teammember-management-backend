import {Router} from 'express';
import {getUser, addUser, updateUser, removeUser} from '../controllers/userController';

const router = Router()

router.get('/', getUser);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', removeUser);

export default router;