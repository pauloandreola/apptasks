import { ITaskDTO } from "../../../dtos/ITaskDTO";
import { ITasksRepository } from "../../infra/repositories/ITasksRepository";

export class CreateTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}
  async execute({ project, task  }: ITaskDTO): Promise<void> {
    
    await this.tasksRepository.addTask({ project, task });
  }
}