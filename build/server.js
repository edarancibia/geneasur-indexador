"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./config/data-source");
const PORT = process.env.PORT || 4000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
//app.use('/user', userRouter);
data_source_1.AppDataSource
    .initialize()
    .then(() => {
    console.log('Database has been initialized!');
})
    .catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`);
});
