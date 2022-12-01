import { conn } from "../../../../../shared/infra/services/db";
import { IUserDTO } from "../../../../dtos/IUserDTO";
import { User } from "../../../entities/user";
import { IUsersRepository } from "../IUsersRepository"

export class UsersRepository implements IUsersRepository {
  constructor() {}
  addUser(data: IUserDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async createUserTable(): Promise<void> {
    conn.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = `CREATE TABLE IF NOT EXISTS
      users (
        userID VARCHAR(100) PRIMARY KEY NOT NULL,
        name VARCHAR(255),
        email VARCHAR(255),
        admin BOOLEAN,
        password VARCHAR(100),
        avatar LONGBLOB,
        department VARCHAR(50),
        created_at TIMESTAMP,
        update_at TIMESTAMP)`;
      conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });
    });  
  }
  findByEmail(email: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }

  // addUser(data: IUserDTO): Promise<void> {
  //   throw new Error("Method not implemented.");
  // }
  // // async createTable(): Promise<void> {
  // //   await conn().then
  // // }
  // findByEmail(email: string): Promise<User> {
  //   throw new Error("Method not implemented.");
  // }
  // findById(id: string): Promise<User> {
  //   throw new Error("Method not implemented.");
  // }

}

// export class UsersRepository implements IUsersRepository {
//   private repository: Promise<User>;

//   constructor() {
//     this.repository = AppDataSource.getRepository(User);
//   }

//   async create({
//     name,
//     email,
//     password,
//     id,
//     avatar,
//   }: IUserDTO): Promise<void> {
//     const user = this.repository.create({
//       name,
//       email,
//       password,
//       id,
//       avatar,
//     });

//     await this.repository.save(user);
//   }

//   async findByEmail(email: string): Promise<User> {
//     const user = await this.repository.findOneBy({ email });
//     return user;
//   }

//   async findById(id: string): Promise<User> {
//     const user = await this.repository.findOneBy({ id });
//     return user;
//   }
