export class User {
  'id': string;
  'task': string;
  'created_at': Date;
  'updated_at': Date;
  'start_date': Date;
  'end_date': Date;
  'total': number;

  constructor(id: string, task: string, created_at: Date, updated_at: Date, start_date: Date, end_date: Date, total: number) {
    id: id;
    task: task;
    created_at: created_at;
    updated_at: updated_at;
    start_date: start_date;
    end_date: end_date;
    total: total;
  }
}
