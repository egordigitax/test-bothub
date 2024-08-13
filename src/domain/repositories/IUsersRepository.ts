import {IUser} from "../entities/IUser";


export interface IUsersRepository {
    getById(id: number): Promise<IUser>,
    getByUsername(username: string): Promise<IUser>,
    getAll(): Promise<IUser[]>,
    create(user: IUser): Promise<IUser>,
    update(user: IUser): Promise<IUser>,
}