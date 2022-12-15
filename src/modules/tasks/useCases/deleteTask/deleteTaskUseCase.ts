import { ITasksRepository } from "../../infra/repositories/ITasksRepository";

export class DeleteTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}
    async execute(task_id: string): Promise<void> {
      const taskAlreadyExist = await this.tasksRepository.findById(task_id);

      if (!taskAlreadyExist) {
        throw new Error("Task not found")
      }
      this.tasksRepository.deleteTask(task_id);
    }
}