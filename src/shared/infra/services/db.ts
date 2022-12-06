import mysql  from "mysql2";

export const conn = mysql.createConnection({
  host: '172.22.0.2',
  user: "root",
  password: "root",
  database: "apptasks"
});