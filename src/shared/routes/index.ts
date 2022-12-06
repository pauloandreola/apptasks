import { Router } from 'express';
import { TasksRepository } from '../../modules/tasks/infra/repositories/implementations/tasksRepository';
import { UsersRepository } from '../../modules/users/infra/repositories/implementations/usersRepository';
import { tasksRoutes } from '../../modules/tasks/routes/tasks.routes';
import { usersRoutes } from '../../modules/users/routes/users.routes';

export const router = Router();

const createTableUserRepository = new UsersRepository();
createTableUserRepository.createUserTable();

const createTableTaskRepository = new TasksRepository();
createTableTaskRepository.createTaskTable();

router.use('/tasks', tasksRoutes);
console.log("Passando pelo routes 02 task");
router.use('/users', usersRoutes);
console.log("Passando pelo routes 01 user");
