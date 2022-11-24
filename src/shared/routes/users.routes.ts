import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../../config/uploads';
import { ensureAuthenticated } from '../../middlewares/ensureAuthenticated';

// import { CreateUserController } from "../../modules/users/useCases/createUser/createUserController";
// import { LoginUserController } from "../../modules/users/useCases/loginUser/loginUserController";
import { UpdateAvatarUserController } from '../../modules/users/useCases/updateAvatarUser/updateAvatarUserController';
// import { UpdateUserController } from "../../modules/accounts/useCases/updateUser/updateUserController";

export const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

// const createUserController = new CreateUserController();
// const loginUserController = new LoginUserController();
const updateAvatarUserController = new UpdateAvatarUserController();
// const updateUserController = new UpdateUserController();

// usersRoutes.post('/register', createUserController.handle);

// usersRoutes.post('/login', loginUserController.handle);

usersRoutes.patch('/avatar', ensureAuthenticated, uploadAvatar.single('avatar'), updateAvatarUserController.handle);

// usersRoutes.put('/:id', updateUserController.handle);
