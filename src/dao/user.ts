const { Client } = require('pg')


import * as express from "express";
import { Account } from "../model/account";
const app = express();


const db_props = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
  };

export class userDao {

  // simple class to interact with PG
    public async readUsers() {
        const client = new Client(db_props);
        await client.connect();
        const res = await client.query('SELECT * from account');
        await client.end()
        return res.rows as Account[]
    }

    public async findByUsername(username: String) {
      const query = {
        text: `SELECT * from account where username like $1`,
        values: [username],
      }
      const client = new Client(db_props);
      await client.connect();
      const res = await client.query(query);
      await client.end()
      return res.rows[0] as Account
    } 

    public async saveUser(user: Account): Promise<void> {
        const query = {
            text: 'INSERT INTO account(username, password, permissions) VALUES($1, $2, $3)',
            values: [user.username, user.password, user.permissions],
          }
        const client = new Client(db_props);
        await client.connect();
        const res = await client.query(query);
        await client.end()
    }
}