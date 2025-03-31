import { Request, Response, NextFunction } from "express";
import UserController from "@/controllers/user";

export default class UserHTTPHandler {

    private userController = new UserController();
    
    async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await this.userController.getAllUsers();
            res.json(users)
        } catch (error) {
            next(error);
        }
    }

    // Revisar los metodos de aqui en adelante, ya que no se si son los correctos
    async getUserById(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await this.getUserById(req, res, next);
            res.json(user)
        } catch (error) {
            next(error);
        }
    }

    async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await this.updateUser(req, res, next);
            res.json(user)
        } catch (error) {
            next(error);
        }
    }

    async deleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await this.deleteUser(req, res, next);
            res.json(user)
        } catch (error) {
            next(error);
        }
    }

}