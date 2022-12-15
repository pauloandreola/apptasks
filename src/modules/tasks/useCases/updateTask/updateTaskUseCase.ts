import { AppError } from "../../../../errors/appErrors";
import { ITasksRepository } from "../../infra/repositories/ITasksRepository";

export class UpdateTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}
  async execute(task_id: string): Promise<void> {
    const taskAlreadyExist = await this.tasksRepository.findById(task_id);

    if (!taskAlreadyExist) {
      throw new AppError("Task not found")
    }
    this.tasksRepository.updateTask(task_id);
  }
}