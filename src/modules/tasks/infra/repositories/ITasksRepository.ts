import { ITaskDTO } from "../../../dtos/ITaskDTO";
import { Task } from "../../entities/task";

export interface ITasksRepository {
  addTask(data: ITaskDTO): Promise<void>;
  createTaskTable(): Promise<void>;
  findByTask(task: string): Promise<Task>;
  findById(id: string): Promise<Task>;
}