import { IUsersRepository } from "../../infra/repositories/IUsersRepository";

export class LoginUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}
}