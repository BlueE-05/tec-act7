import express from 'express';
import UserHTTPHandler from '../handlers/user';

const router = express.Router();
const userHandler = new UserHTTPHandler();

router.get('/', (req, res, next) => userHandler.getUsers(req, res, next));
router.get('/:id', (req, res, next) => userHandler.getUserById(req, res, next));
router.put('/:id', (req, res, next) => userHandler.updateUser(req, res, next));
router.delete('/:id', (req, res, next) => userHandler.deleteUser(req, res, next));
router.post('/newUser', (req, res, next) => userHandler.createUser(req, res, next));

export default router;