import { hash } from 'bcryptjs';
import { AppError } from '../../../../errors/appErrors';

import { IUserDTO } from '../../../dtos/IUserDTO';
import { IUsersRepository } from '../../infra/repositories/IUsersRepository';

export class CreateUserUseCase {
  constructor( private usersRepository: IUsersRepository ) {}

  async execute({ name, email, password, department, confpassword }: IUserDTO): Promise<void> {
    
    if (password != confpassword) {
      throw new AppError('Email or password incorrect');
    }
    
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.addUser({ name, email, password :passwordHash, department });
  }
}
