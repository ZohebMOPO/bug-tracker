import 'reflect-metadata';
import { createConnection } from 'typeorm';

export const connectToDB = async () => {
    try {
        await createConnection();
        console.log("PGSQL Connected!")
    } catch (err) {
        console.error(err.message)
    }
}