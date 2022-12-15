import { Request, Response } from 'express';
import { CreateUserUseCase } from './createUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password, department, confpassword } = request.body;
      await this.createUserUseCase.execute({ name, email, password, department, confpassword});
      return response.json('User created').status(201);
    } catch (error) {
      return response.status(400).json(error); 
    }
  }
}
