export class User {
  'id': string;
  'name': string;
  'email': string;
  'admin': boolean;
  'password': string;
  'avatar': string;
  'department': string;
  'created_at': Date;
  'updated_at': Date;

  constructor(id: string, name: string, email: string, admin: boolean, password: string, avatar: string, department: "Development" | "IA" | "RPA", created_at: Date, updated_at: Date) {
    id: id;
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
