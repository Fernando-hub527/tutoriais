import "reflect-metadata"
import { DataSource } from "typeorm"
import { Versions } from "../../src/entity/Versions"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Versions],
    migrations: [],
    subscribers: [],
})
