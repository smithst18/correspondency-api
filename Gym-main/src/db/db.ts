import { DataSource } from 'typeorm';
import { User } from './entities/User';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Emanuel12309/?",
    database: "gymProyect",
    synchronize: true,
    logging: true,
    entities: [User],
});