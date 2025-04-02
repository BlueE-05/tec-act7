import UserDB from '../db/users';

export default class UserController {
    private db = new UserDB();

    async getAllUsers() {
        return this.db.getAllUsers();
    }

    async getUserById(id: string) {
        return this.db.getUserById(id);
    }

    async updateUser(id: string, name: string, username: string) {
        return this.db.updateUser(id, name, username);
    }
    
    async deleteUser(id: string) {
        return this.db.deleteUser(id);
    }
}