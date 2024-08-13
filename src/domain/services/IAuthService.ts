import {IUser} from "../entities/IUser";
import {IAuthToken} from "../entities/IAuthToken";


export interface IAuthService {
    generateTokens(user: IUser): Promise<IAuthToken>;
    authUser(username: string, password: string): Promise<IAuthToken>;
    validateToken(token: string): Promise<IUser>;
}