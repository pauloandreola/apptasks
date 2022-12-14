import { AppError } from "../../../../errors/appErrors";

import { IUsersRepository } from "../../infra/repositories/IUsersRepository";

export class UpdateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  async execute(user_id: string): Promise<void> {
    const userAlreadyExist = await this.usersRepository.findById(user_id);

    if (!userAlreadyExist) {
      throw new AppError("User not found")
    }
    this.usersRepository.updateUser(user_id);
  }
}
