import { v4 as uuidV4 } from 'uuid';

export class User {
  'userId': string
  'name': string
  'email': string
  'admin': boolean
  'password': string
  'avatar': string
  'department': "Development" | "IA" | "RPA"
  'created_at': Date
  'updated_at': Date

  constructor(userId: string, name: string, email: string, admin: boolean, password: string, avatar: string, department: "Development" | "IA" | "RPA", created_at: Date, updated_at: Date) {
    userId: userId;
    name: name;
    email: email;
    admin: admin;
    password: password;
    avatar: avatar;
    department: department;
    created_at: created_at;
    updated_at: updated_at;
  }

}
