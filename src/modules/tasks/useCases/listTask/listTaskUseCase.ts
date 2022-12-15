import { ITasksRepository } from "../../infra/repositories/ITasksRepository";

export class ListTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}
  async execute(task_id: string): Promise<any> {
    const task = await this.tasksRepository.findById(task_id);

    if (!task) {
      throw new Error("Task not found");
    }
    return task;
  }
}