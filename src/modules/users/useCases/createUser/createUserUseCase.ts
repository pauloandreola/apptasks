import { hash } from 'bcryptjs';
import { IUserDTO } from '../../../dtos/IUserDTO';
import { IUsersRepository } from '../../infra/repositories/IUsersRepository';
import { AppError } from '../../../../errors/appErrors';

export class CreateUserUseCase {
  constructor( private usersRepository: IUsersRepository ) {}

  async execute({ userId, name, email, admin, password, department, created_at, updated_at, confpassword }: IUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.addUser({ userId, name, email, admin, password :passwordHash, department, created_at, updated_at });
  }
}
