import { User } from "models/entities/user.entity";

export class UserService {
    async saveUser(user: User): Promise<User> {
        try {
            const newUser = await User.create(user);

            return await User.save(newUser);
        } catch (error) {
            throw error;
        }
    }
}
