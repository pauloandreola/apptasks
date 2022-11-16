// import  sqlite3  from "sqlite3";
// // Função para verificação se existe DATABASE_FILE dentro de .env. Se não encontrar retorna a mensagem
// const DATABASE_FILE = process.env.DATABASE_FILE;
// if(!DATABASE_FILE)
//   throw new Error("DATABASE_FILE not found!");

// // Função para abertura de conexão do banco de dados
// export const openConnection = () => {
//   let db = new sqlite3.Database(DATABASE_FILE);
//   return db;
// }

// // Função para retornar somente o primeiro item da consulta
// export const dbQueryFirst = async (query: string, params?: any[]) => {
//   const back = await dbQuery(query, params);
//   return back; 
// }

// // Função encapsulada para executar as Query's. Abrindo a conexão e no final do processo fechando a conexão
// export const dbQuery = (query: string, params?: any[]) => {
//   let db = openConnection();
//   return new Promise((resolve, reject) => {
//     db.all(query, params, (err, rows) => {
//       if(err)
//         reject(err);
//       else
//         resolve(rows);  
//     })
//   })
//   .finally(() => {
//     db.close();
//   })
// }