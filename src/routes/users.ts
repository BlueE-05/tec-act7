import express from 'express';
import UserHTTPHandler from '@/handlers/user';

const router = express.Router();

const userHandler = new UserHTTPHandler();

router.get('/', userHandler.getUsers);
router.get('/:id', userHandler.getUserById);
router.put('/:id', userHandler.updateUser);
router.delete('/:id', userHandler.deleteUser);

export default router;