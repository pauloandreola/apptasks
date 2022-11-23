import { Router } from 'express';
import { tasksRoutes } from './tasks.routes';
import { usersRoutes } from './users.routes';

export const router = Router();

router.use('/users', usersRoutes);
router.use('/tasks', tasksRoutes);