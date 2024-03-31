import { UserService } from "config/services/user.service";
import { Request, Response } from 'express';

export class UserController {
    private userService: UserService;

    constructor(){
        this.userService = new UserService();
    }

    async handleSaveUser(req: Request, res: Response) {
        const userData = req.body;

        try {
            const saverUser = await this.userService.saveUser(userData);
            
            return res.status(200).json(saverUser);
        } catch (error) {
            return res.status(500).json({ error: 'Error al crear usuario' });
        }
    }
}
