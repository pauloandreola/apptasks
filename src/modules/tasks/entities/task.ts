import { v4 as uuidV4 } from 'uuid';

export class Task {
  'taskId': string;
  'project': string;
  'task': string;
  'created_at': Date;
  'updated_at': Date;
  'end_date': Date;
  'total': number;

  constructor(taskId: string, project: string, task: string, created_at: Date, updated_at: Date, end_date: Date, total: number) {

    taskId: taskId;
    project: project;
    task: task;
    created_at: created_at;
    updated_at: updated_at;
    end_date: end_date;
    total: total;

  }
}
