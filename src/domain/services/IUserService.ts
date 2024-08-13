import {IUser, IUserRepresentation, Role} from "../entities/IUser";


export interface IUserService {
    getUserById(id: number): Promise<IUserRepresentation>
    getUserByUsername(username: string): Promise<IUserRepresentation>
    getUsers(): Promise<IUserRepresentation[]>
    createUser(username: string, password: string): Promise<IUserRepresentation>
    updateUser(user: IUser): Promise<IUserRepresentation>
    updateRole(id: number, role: Role): Promise<IUserRepresentation>
}