import { DataSource } from 'typeorm';
// import { User } from './entities/User';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Eaa12309/?",
    database: "corrp",
    synchronize: true,
    logging: true,
    entities: ["src/db/entities/**/*.ts"],
});