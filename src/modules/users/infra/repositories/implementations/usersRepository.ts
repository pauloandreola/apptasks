import { conn } from "../../../../../shared/infra/services/db";
import { IUserDTO } from "../../../../dtos/IUserDTO";
import { User } from "../../../entities/user";
import { IUsersRepository } from "../IUsersRepository"

export class UsersRepository implements IUsersRepository {
  constructor() {}
  async addUser({userId, name, email, admin, password,department, created_at, updated_at}: IUserDTO): Promise<void> {
    conn.connect(function(err) {
      if (err) throw err;
      var sql = `INSERT INTO
      users (userId, name, email, admin, password, department, created_at, updated_at)
      VALUES (?,?,?,?,?,?,?,?)`;
      conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("User included");
      });
    });
  }
  async createUserTable(): Promise<void> {

    conn.connect(function(err) {
      if (err) throw err;
      console.log("MySQL to create user table Connected!");
      var sql = `CREATE TABLE IF NOT EXISTS
      users (
        userId VARCHAR(100) PRIMARY KEY NOT NULL,
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
        console.log("If not exists user table created!");
      });
    });  
  }
  findByEmail(email: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
