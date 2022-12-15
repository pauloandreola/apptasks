import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../../../config/uploads';

import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated';
import { createUserController } from '../useCases/createUser';
import { loginUserController } from '../useCases/loginUser';
import { updateAvatarUserController } from '../useCases/updateAvatarUser';
import { updateUserController } from '../useCases/updateUser';

export const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

usersRoutes.post('/register', (request, response) => createUserController.handle(request, response));

usersRoutes.get('/login', (request, response) => loginUserController.handle(request, response));

usersRoutes.patch('/avatar', (request, response) => 
// ensureAuthenticated, uploadAvatar.single('avatar'),
updateAvatarUserController.handle(request, response));

usersRoutes.patch('/:id', (request, response) => updateUserController.handle(request, response));
