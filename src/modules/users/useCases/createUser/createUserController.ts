import { Request, Response } from 'express';
import { CreateUserUseCase } from './createUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { userId, name, email, admin, password, department, created_at, updated_at, confpassword } = request.body;

      await this.createUserUseCase.execute({ userId, name, email, admin, password, department, created_at, updated_at });
  
      return response.json('User created').status(200);
      
    } catch (error) {
      return response.status(400).json(error); 
    }
  }
}
