import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
  connectionLimit: 10,
});

export const prisma = new PrismaClient({
  adapter,
  }).$extends({
  query: {
    async $allOperations({ model, operation, args, query }) {
      const start = Date.now();

      const result = await query(args);

      const end = Date.now();

      console.log(
        `[Prisma Query] ${model}.${operation} - ${end - start}ms`
      );

      return result;
    },
  },
});