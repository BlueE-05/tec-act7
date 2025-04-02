import { Request, Response, NextFunction } from 'express';
import UserController from '../controllers/user';

export default class UserHTTPHandler {
    private userController: UserController;

    constructor() {
        this.userController = new UserController();
    }

    async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await this.userController.getAllUsers();
            res.json(users);
        } catch (error) {
            next(error);
        }
    }

    async getUserById(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await this.userController.getUserById(req.params.id);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, username } = req.body;
            const user = await this.userController.updateUser(req.params.id, name, username);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    async deleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            await this.userController.deleteUser(req.params.id);
            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}