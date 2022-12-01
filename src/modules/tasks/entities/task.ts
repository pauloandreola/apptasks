export class Task {
  'taskId': string;
  'task': string;
  'created_at': Date;
  'updated_at': Date;
  'start_date': Date;
  'end_date': Date;
  'total': number;

  constructor(taskId: string, task: string, created_at: Date, updated_at: Date, start_date: Date, end_date: Date, total: number) {
    taskId: taskId;
    task: task;
    created_at: created_at;
    updated_at: updated_at;
    start_date: start_date;
    end_date: end_date;
    total: total;
  }
}
