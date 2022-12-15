import { LoginUserUseCase } from "./loginUserUseCase";

export class LoginUserController {
  constructor(private loginUserUseCase: LoginUserUseCase) {}
}
