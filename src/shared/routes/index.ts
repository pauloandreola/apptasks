import { Router } from 'express';
import { usersRoutes } from './users';

export const router = Router();

router.use("/users", usersRoutes);