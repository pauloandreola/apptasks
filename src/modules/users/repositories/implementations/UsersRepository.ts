// import { IUserDTO } from '../../../dtos/IUserDTO';
// import { User } from '../../entities/user';
// import { IUsersRepository } from '../IUsersRepository';

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
// }
