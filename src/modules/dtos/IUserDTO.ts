export interface IUserDTO {
  id?: string,
  name: string,
  email: string,
  admin?: boolean,
  password: string,
  avatar?: string,
  department?: "Development" | "IA" | "RPA",
  created_at?: Date,
  updated_at?: Date,
}
