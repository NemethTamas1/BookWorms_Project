import { Injectable } from '@nestjs/common';
import { createClient } from "@libsql/client";

@Injectable()
export class DatabaseService {
    turso = createClient({
        url: process.env.DATABASE_URL,
        authToken: process.env.DATABASE_TOKEN,
    });
}