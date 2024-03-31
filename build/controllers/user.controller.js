"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("config/services/user.service");
class UserController {
    constructor() {
        this.userService = new user_service_1.UserService();
    }
    handleSaveUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = req.body;
            try {
                const saverUser = yield this.userService.saveUser(userData);
                return res.status(200).json(saverUser);
            }
            catch (error) {
                return res.status(500).json({ error: 'Error al crear usuario' });
            }
        });
    }
}
exports.UserController = UserController;
