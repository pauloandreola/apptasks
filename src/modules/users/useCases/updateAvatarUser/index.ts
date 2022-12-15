import { UsersRepository } from "../../infra/repositories/implementations/usersRepository";
import { UpdateAvatarUserController } from "./updateAvatarUserController";
import { UpdateAvatarUserUseCase } from "./updateAvatarUserUseCase";

const usersRepository = new UsersRepository();
const updateAvatarUserUseCase = new UpdateAvatarUserUseCase(usersRepository);
export const updateAvatarUserController = new UpdateAvatarUserController(updateAvatarUserUseCase);
