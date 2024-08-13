import {UsersRepository} from "../database/repositories/usersRepository";
import {IUsersRepository} from "../../domain/repositories/IUsersRepository";


export function injectUsersRepository(): IUsersRepository {
    return new UsersRepository()
}