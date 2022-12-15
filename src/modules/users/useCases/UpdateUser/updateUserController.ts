import { Request, Response } from "express";

import { UpdateUserUseCase } from "./updateUserUseCase";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { task_id } = request.params;
      await this.updateUserUseCase.execute(task_id);
      return response.json("User updated");
    } catch (error) {
      return response.status(405).json(error);
    }
  }
}
