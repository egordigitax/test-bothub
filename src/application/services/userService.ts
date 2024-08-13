import {IUser, IUserRepresentation, Role} from "@domain/entities/IUser";
import {IUserService} from "../../domain/services/IUserService";
import {generateSalt, hashPassword} from "../utils/crypto";
import {UserMapper} from "../mappers/userMapper";
import {injectUsersRepository} from "../../infra/injectors/injectUsersRepository";
import {IUsersRepository} from "../../domain/repositories/IUsersRepository";

export class UserService implements IUserService {
    constructor(private usersRepository: IUsersRepository = injectUsersRepository()) {
    }

    async getUserById(id: number): Promise<IUserRepresentation> {
        return UserMapper.toUserRepresentation(await this.usersRepository.getById(id));
    }

    async getUsers(): Promise<IUserRepresentation[]> {
        const users = await this.usersRepository.getAll();
        return users.map(UserMapper.toUserRepresentation)
    }

    async createUser(username: string, password: string): Promise<IUserRepresentation> {
        const salt = await generateSalt()
        const newUser = await this.usersRepository.create({
            password: await hashPassword(password, salt),
            role: Role.USER,
            username: username,
            salt: salt,
        });
        return UserMapper.toUserRepresentation(newUser)
    }

    async updateUser(user: IUser): Promise<IUserRepresentation> {
        const updatedUser = await this.usersRepository.update(user);
        return UserMapper.toUserRepresentation(updatedUser);
    }

    async getUserByUsername(username: string): Promise<IUserRepresentation> {
        const user = await this.usersRepository.getByUsername(username);
        return UserMapper.toUserRepresentation(user);
    }

    async updateRole(id: number, role: Role): Promise<IUserRepresentation> {
        const user = await this.usersRepository.getById(id)
        const updatedUser = await this.usersRepository.update({
            ...user,
            role: role
        });
        return UserMapper.toUserRepresentation(updatedUser);
    }
}