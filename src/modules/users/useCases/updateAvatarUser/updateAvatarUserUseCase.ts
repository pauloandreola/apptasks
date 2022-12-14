import { deleteFile } from '../../../../utils/file';

import { IUsersRepository } from '../../infra/repositories/IUsersRepository';

interface IRequest {
  user_id: string;
  avatarFile: string;
}

export class UpdateAvatarUserUseCase {
  constructor( private usersRepository: IUsersRepository ) {}

  async execute({ user_id, avatarFile }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);
    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }
    user.avatar = avatarFile;
    await this.usersRepository.addUser(user);
  }
}
