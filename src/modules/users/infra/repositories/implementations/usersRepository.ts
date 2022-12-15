import { conn } from "../../../../../shared/infra/services/db";

import { IUserDTO } from "../../../../dtos/IUserDTO";
import { IUsersRepository } from "../IUsersRepository"

export class UsersRepository implements IUsersRepository {
  constructor() {}

  async addUser({user_id, name, email, admin, password, department}: IUserDTO): Promise<void> {
    conn.connect(function(err) {
      if (err) throw err;
      var sql = `INSERT INTO
      users (user_id, name, email, admin, password, department)
      VALUES (?,?,?,?,?,?)`
      conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("User included", result);
      });
    });
    conn.end();
  }

  async createUserTable(): Promise<void> {
    conn.connect(function(err) {
      if (err) throw err;
      console.log("MySQL to create user table Connected!");
      var sql = `CREATE TABLE IF NOT EXISTS
      users (
        user_id VARCHAR(100) PRIMARY KEY NOT NULL,
        name VARCHAR(255),
        email VARCHAR(255) UNIQUE,
        admin BOOLEAN,
        password VARCHAR(100),
        avatar LONGBLOB,
        department VARCHAR(50),
        created_at TIMESTAMP default now(),
        updated_at TIMESTAMP)`;
      conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("If not exists user table created!", result);
      });
    }); 
    conn.end();
  }

  async findByEmail(email: string): Promise<any> {
    const user = conn.connect(function(err) {
      if (err) throw err;
      var sql = `SELECT * FROM users WHERE email = ?`;
      conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("User founded", result);
      });
    });   conn.end();

    return user;
  }

  async findById(user_id: string): Promise<any> {
    const user = await conn.connect(function(err) {
      if (err) throw err;
      var sql = `SELECT * FROM users WHERE id = ?`;
      conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("User founded", result);
      });
    });   conn.end();

    return user;
  }

  async updateUser(user_id: string): Promise<any> {
    const user = await conn.connect(function(err) {
      if (err) throw err;
      var sql = `UPDATE users SET user_id = "" WHERE users.user_id = ?`;
      conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("User founded", result);
      });
    });  conn.end();

    return user;
  }
  
}
