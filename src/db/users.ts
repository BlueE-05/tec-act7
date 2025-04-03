export default class UserDB {
    private users: any[] = [
        { id: '1', name: 'John Doe', username: 'johndoe' },
        { id: '2', name: 'Jane Smith', username: 'janesmith' },
        { id: '3', name: 'Carlos Pérez', username: 'carlosperez' },
        { id: '4', name: 'Marta García', username: 'martagarcia' },
        { id: '5', name: 'Luis Martínez', username: 'luismartinez' },
        { id: '6', name: 'Ana López', username: 'analopez' },
        { id: '7', name: 'David Rodríguez', username: 'davidrodriguez' },
        { id: '8', name: 'Patricia Gómez', username: 'patriciagomez' },
        { id: '9', name: 'Fernando González', username: 'fernandogonzalez' },
        { id: '10', name: 'Sofía Sánchez', username: 'sofisanchez' }
    ];

    async getAllUsers() {
        return this.users;
    }

    async getUserById(id: string) {
        return this.users.find(user => user.id === id);
    }

    async updateUser(id: string, name: string, username: string) {
        const user = this.users.find(user => user.id === id);
        if (user) {
            user.name = name;
            user.username = username;
            return user;
        }
        return null;
    }

    async deleteUser(id: string) {
        this.users = this.users.filter(user => user.id !== id);
        return { message: 'User deleted successfully' };
    }

    async createUser(name: string, username: string) {
        const newUser = {
            id: (this.users.length + 1).toString(),
            name,
            username
        };
        this.users.push(newUser);
        return newUser;
    }
}