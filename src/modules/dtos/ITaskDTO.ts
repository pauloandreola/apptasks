export interface ITaskDTO {
  taskId: string,
  project:string,
  task: string,
  created_at?: Date,
  updated_at?: Date,
  end_at: Date,
  total: number,
}
