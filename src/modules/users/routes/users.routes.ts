import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../../../config/uploads';
import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated';

import { createUserController } from "../useCases/createUser";
// import { LoginUserController } from "../useCases/loginUser/loginUserController";
import { UpdateAvatarUserController } from '../useCases/updateAvatarUser/updateAvatarUserController';
// import { UpdateUserController } from "../useCases/updateUser/updateUserController";

export const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

// const CreateUserController = new createUserController();
// const loginUserController = new LoginUserController();
const updateAvatarUserController = new UpdateAvatarUserController();
// const updateUserController = new UpdateUserController();

usersRoutes.post('/register', (request, response) => createUserController.handle(request, response));
console.log("Passando pelo routes.user");
// usersRoutes.post('/login', loginUserController.handle);

usersRoutes.patch('/avatar', ensureAuthenticated, uploadAvatar.single('avatar'), updateAvatarUserController.handle);

// usersRoutes.put('/:id', updateUserController.handle);
