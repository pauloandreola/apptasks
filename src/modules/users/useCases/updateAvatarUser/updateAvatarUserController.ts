import { Request, Response } from 'express';
import { UpdateAvatarUserUseCase } from '../updateAvatarUser/updateAvatarUserUseCase';

export class UpdateAvatarUserController {
  async handle(request: Request, response: Response): Promise<Response> {
//     const { id } = request.user;
//     const avatarFile = request.file.filename;

//     const updateAvatarUserUseCase = resolve(UpdateAvatarUserUseCase);

//     await updateAvatarUserUseCase.execute({ userId: id, avatarFile });

    return response.status(204).send();
  }
}
