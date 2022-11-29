import { IUserDTO } from '../../../dtos/IUserDTO';
import { User } from '../../entities/user';

export interface IUsersRepository {
  addUser(data: IUserDTO): Promise<void>;
  createUserTable(): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}
