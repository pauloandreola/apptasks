import { IUserDTO } from '../../dtos/IUserDTO';
import { User } from '../entities/user';

export interface IUsersRepository {
  create(data: IUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}
