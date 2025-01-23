import 'dotenv/config';
import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DbService {
  private readonly client = new Pool({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  startQuery() {
    return this.client;
  }
}
