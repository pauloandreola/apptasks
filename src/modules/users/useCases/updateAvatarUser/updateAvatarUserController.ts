import { Request, Response } from 'express';
import { UpdateAvatarUserUseCase } from '../updateAvatarUser/updateAvatarUserUseCase';

export class UpdateAvatarUserController {
  constructor( private updateAvatarUserUseCase: UpdateAvatarUserUseCase ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id } = request.params;
      const avatarFile = request.file?.filename;
      await this.updateAvatarUserUseCase.execute({ user_id, avatarFile });
      return response.status(204).send();
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}  
