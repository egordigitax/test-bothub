import {IUserService} from "../../../domain/services/IUserService";
import {UserService} from "../../services/userService";

export function injectUsersService(): IUserService {
    return new UserService()
}