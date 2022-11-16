# apptasks

# pre requisitos
- Deverá ser possível cadastrar um novo usuário. Será uma rota pública que receberá nome, e-mail e senha. O nome precisará ter pelo menos 3 caracteres. O e-mail deverá ser um e-mail válido. A senha deverá ter no mínimo 6 caracteres
- Não deverá existir usuários duplicados: verificar utilizando o e-mail
- Deverá ser possível realizar login. Será uma rota pública que receberá e-mail e senha.
- Um usuário que não for cadastrado não deverá conseguir logar na aplicação
- Deverá ser possível um usuário inserir uma nova foto de perfil. Será uma rota privada.
- Deverá ser possível atualizar os dados de um usuário. Será uma rota privada.
- Deverá ser possível realizar a criação de uma task. Será uma rota privada.
- Deverá ser possível realizar a atualização de uma task. Será uma rota privada. Somente o usuário que criou a task poderá atualizá-la
- Deverá ser possível realizar a deletar uma task. Será uma rota privada. Somente o usuário que criou a task poderá deletá-la
- Deverá ser possível listar as tasks. Será uma rota privada. O usuário somente verá as tasks que ele mesmo criou. Deverá ser possível ordenar e filtrar as tasks com base nos campos "created_at", "updated_at" e "done"