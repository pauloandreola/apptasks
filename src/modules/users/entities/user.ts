import { v4 as uuidV4 } from 'uuid';
export class User {
  "id": string;
  "name": string;
  "email": string;
  "admin": boolean;
  "password": string;
  "avatar": string;
  "created_at": Date;
  "updated_at": Date;

  constructor(id: string, name: string, email: string, admin: boolean, password: string, avatar: string, created_at: Date, updated_at: Date) {
    id: id;
    name: name;
    email: email;
    admin: admin;
    password: password;
    avatar: avatar;
    created_at: created_at;
    updated_at: updated_at;
  
    // {
    //   if (!this.id) {
    //     this.id = uuidV4();
    //   }
    // }
  }
}