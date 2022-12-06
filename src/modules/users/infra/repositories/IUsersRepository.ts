import { IUserDTO } from '../../../dtos/IUserDTO';
import { User } from '../../entities/user';

export interface IUsersRepository {
  addUser({userId, name, email, admin, password, avatar, department, created_at, updated_at}: IUserDTO): Promise<void>;
  createUserTable(): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;

}
