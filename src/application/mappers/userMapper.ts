import {IUser, IUserRepresentation} from "../../domain/entities/IUser";


export class UserMapper {
    static toUserRepresentation(user: IUser): IUserRepresentation {
        return user
    }
}