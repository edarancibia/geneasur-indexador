import { UserController } from "controllers/user.controller";
import * as express from "express";

const controller = new UserController();

const router = express.Router()

router.post('/', (req, res) => controller.handleSaveUser(req, res));

export { router as userRouter };
