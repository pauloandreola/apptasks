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
      var sql = `CREATE TABLE IF NOT EXISTS
      tasks (
        taskId VARCHAR(100) PRIMARY KEY NOT NULL,
        task VARCHAR(255),
        created_at TIMESTAMP,
        update_at TIMESTAMP,
        start_date TIMESTAMP,
        end_date TIMESTAMP,
        total INTEGER,
        userID VARCHAR(100),
        CONSTRAINT FK_UserID FOREIGN KEY (userID)
        REFERENCES users(userID))`;
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
