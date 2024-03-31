import { join } from 'path';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: "postgres",
    host: 'localhost',
    port: 5433,
    username: process.env.POSTGRES_USER || 'root',
    password: process.env.POSTGRES_PASSWORD || 'root',
    database: process.env.POSTGRES_DATABASE || 'geneasur_db',
    synchronize: false,
    migrationsRun: true,
    logging: true,
    entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
    subscribers: [],
    migrations: [],
});

export { AppDataSource };

