import { Router } from 'express';
import { TasksRepository } from '../../modules/tasks/infra/repositories/implementations/tasksRepository';
import { UsersRepository } from '../../modules/users/infra/repositories/implementations/usersRepository';
import { tasksRoutes } from '../../modules/tasks/routes/tasks.routes';
import { usersRoutes } from '../../modules/users/routes/users.routes';

export const router = Router();

const createTableTaskRepository = new TasksRepository();
createTableTaskRepository.createTaskTable();

const createTableUserRepository = new UsersRepository();
createTableUserRepository.createUserTable();

router.use('/tasks', tasksRoutes);
router.use('/users', usersRoutes);
