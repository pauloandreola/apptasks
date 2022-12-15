import { Request, Response } from "express";
import { DeleteTaskUseCase } from "./deleteTaskUseCase";

export class DeleteTaskController {
  constructor(private deleteTaskUseCase: DeleteTaskUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { task_id } = request.params;
      await this.deleteTaskUseCase.execute(task_id);
      return response.json("Task deleted");
    } catch (error) {
      return response.status(405).json(error);
    }
  }
}