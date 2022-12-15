import { Request, Response } from 'express';
import { CreateTaskUseCase } from './createTaskUseCase';

export class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}
  
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { project, task } = request.body;
      await this.createTaskUseCase.execute({ project, task });
      return response.json('Task created').status(201);
    } catch (error) {
      return response.status(400).json(error); 
    }
  }
}
