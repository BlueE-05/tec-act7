import express from 'express';

const router = express.Router();
router.get('/', getUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;