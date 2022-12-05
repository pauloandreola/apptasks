import { ITaskDTO } from "../../../dtos/ITaskDTO";
import { Task } from "../../entities/task";

export interface ITasksRepository {
  addTask({taskId, project, task, created_at, updated_at, end_at, total}: ITaskDTO): Promise<void>;
  createTaskTable(): Promise<void>;
  findByTask(task: string): Promise<Task>;
  findById(id: string): Promise<Task>;
}