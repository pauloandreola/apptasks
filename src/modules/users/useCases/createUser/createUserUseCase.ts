import { hash } from 'bcryptjs';
import { IUserDTO } from '../../../dtos/IUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { AppError } from '../../../../errors/appErrors';

export class CreateUserUseCase {
  constructor( private usersRepository: IUsersRepository ) {}

  async execute({
    name,
    email,
    password, 
  }: IUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });
  }
}
