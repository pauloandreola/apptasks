import { ITaskDTO } from "../../../dtos/ITaskDTO";
import { Task } from "../../entities/task";

export interface ITasksRepository {
  addTask(data: ITaskDTO): Promise<void>;
  createTaskTable(): Promise<void>;
  deleteTask(task_id: string): Promise<void>;
  findById(task_id: string): Promise<Task>;
  listAllTasks(): Promise<Task[]>;
  updateTask(task_id: string): Promise<Task>;
}
