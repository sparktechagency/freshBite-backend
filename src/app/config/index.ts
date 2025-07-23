import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const envData = {
  port: process.env.PORT,
  mode: process.env.NODE_ENV,
  secret : process.env.SECRET_KEY,
};
