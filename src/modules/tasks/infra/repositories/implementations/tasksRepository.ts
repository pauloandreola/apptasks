import { conn } from "../../../../../shared/infra/services/db";
import { ITaskDTO } from "../../../../dtos/ITaskDTO";
import { Task } from "../../../entities/task";
import { ITasksRepository } from "../ITasksRepository";

export class TasksRepository implements ITasksRepository {

  constructor() {}
  async addTask({taskId, project, task, created_at, updated_at, end_at, total}: ITaskDTO): Promise<void> {
    conn.connect(function(err) {
      if (err) throw err;
      var sql = `INSERT INTO
      tasks (taskId, project, task, created_at, updated_at, end_at, total)
      VALUES (?,?,?,?,?,?,?)`;
      conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Task included");
      });
    });
  }
  async createTaskTable(): Promise<void> {
    conn.connect(function(err) {
      if (err) throw err;
      console.log("MySQL to create task table Connected!");
      var sql = `CREATE TABLE IF NOT EXISTS
      tasks (
        taskId VARCHAR(100) PRIMARY KEY NOT NULL,
        project VARCHAR(255),
        task VARCHAR(255),
        created_at TIMESTAMP default now(),
        updated_at TIMESTAMP,
        end_date TIMESTAMP,
        total INTEGER,
        userID VARCHAR(100),
        CONSTRAINT FK_UserID FOREIGN KEY (userID)
        REFERENCES users(userID))`;
      conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("If not exists task table created!");
      });
    });    
  }
  findByTask(task: string): Promise<Task> {
    throw new Error("Method not implemented.");
  }
  async findById(id: string): Promise<any> {
    conn.connect(function(err) {
      if (err) throw err;
      var sql = `SELECT * FROM tasks WHERE id = ?`;
      conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Task founded");
      });
    });
  }

}
