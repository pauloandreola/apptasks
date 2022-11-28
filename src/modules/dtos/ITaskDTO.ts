export interface ITaskDTO {
  id?: string,
  task: string,
  created_at?: Date,
  updated_at?: Date,
  start_date: Date,
  end_date: Date,
  total: number,
}
