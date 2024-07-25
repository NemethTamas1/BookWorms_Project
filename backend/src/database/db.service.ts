import { createClient } from "@libsql/client";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DatabaseService {
    turso = createClient({
        url: process.env.DATABASE_URL,
        authToken: process.env.DATABASE_TOKEN,
    });
}