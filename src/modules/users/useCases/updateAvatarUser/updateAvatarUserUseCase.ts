import { deleteFile } from '../../../../utils/file';

import { IUsersRepository } from '../../infra/repositories/IUsersRepository';

interface IRequest {
  userId: string;
  avatarFile: string;
}

export class UpdateAvatarUserUseCase {
  constructor( private UsersRepository: IUsersRepository ) {}

  async execute({ userId, avatarFile }: IRequest): Promise<void> {
    const user = await this.UsersRepository.findById(userId);

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }

    user.avatar = avatarFile;
    await this.UsersRepository.create(user);
  }
}
