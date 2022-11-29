import { Router } from 'express';
import { TasksRepository } from '../../modules/tasks/infra/repositories/implementations/tasksRepository';
import { UsersRepository } from '../../modules/users/infra/repositories/implementations/usersRepository';
import { tasksRoutes } from './tasks.routes';
import { usersRoutes } from './users.routes';

export const router = Router();

const createTableTaskRepository = new TasksRepository();
createTableTaskRepository.createTaskTable();

const createTableUserRepository = new UsersRepository();
createTableUserRepository.createUserTable();

router.use('/tasks', tasksRoutes);
router.use('/users', usersRoutes);
