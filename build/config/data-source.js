"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const path_1 = require("path");
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: 'postgres',
    port: 5433,
    username: process.env.POSTGRES_USER || 'root',
    password: process.env.POSTGRES_PASSWORD || 'root',
    database: process.env.POSTGRES_DATABASE || 'geneasur_db',
    synchronize: false,
    migrationsRun: true,
    logging: true,
    entities: [(0, path_1.join)(__dirname, '../**/*.entity{.ts,.js}')],
    subscribers: [],
    migrations: [],
});
exports.AppDataSource = AppDataSource;
