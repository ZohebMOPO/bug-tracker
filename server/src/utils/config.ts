import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.SERVE as string;
export const JWT_KEY = process.env.JWT_KEY as string;
