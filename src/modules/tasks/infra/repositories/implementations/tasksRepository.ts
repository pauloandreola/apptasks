import { conn } from "../../../../../shared/infra/services/db";
import { ITaskDTO } from "../../../../dtos/ITaskDTO";
import { Task } from "../../../entities/task";
import { ITasksRepository } from "../ITasksRepository";

export class TasksRepository implements ITasksRepository {

  constructor() {}
  addTask(data: ITaskDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async createTaskTable(): Promise<void> {
    conn.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = `CREATE TABLE tasks (id INT(10) PRIMARY KEY auto_increment, task VARCHAR(20), created_at DATE, update_at DATE, start_date DATE, end_date DATE, total int)`;
      conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });
    });    
  }
  findByTask(task: string): Promise<Task> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<Task> {
    throw new Error("Method not implemented.");
  }

}
