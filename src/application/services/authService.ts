import {IUser} from "../../domain/entities/IUser";
import {IAuthService} from "../../domain/services/IAuthService";
import {IAuthToken} from "../../domain/entities/IAuthToken";
import {hashPassword, jwtSign, jwtVerify} from "../utils/crypto";
import {UnauthorizedError, UserNotFoundError} from "../../domain/errors/AuthErrors";
import {injectUsersRepository} from "../../infra/injectors/injectUsersRepository";
import {IUsersRepository} from "../../domain/repositories/IUsersRepository";


export class AuthService implements IAuthService{
    constructor(private userRepository: IUsersRepository = injectUsersRepository()) {
    }

    async authUser(username: string, password: string): Promise<IAuthToken> {
        const user = await this.userRepository.getByUsername(username)
        if (!user) throw new UserNotFoundError()

        const hashedPass = await hashPassword(password, user.salt)
        if (user.password != hashedPass) throw new UnauthorizedError()

        return this.generateTokens(user)
    }

    async validateToken(token: string): Promise<IUser> {
        const { userId } = jwtVerify(token)
        return this.userRepository.getById(userId)
    }

    async generateTokens(user: IUser): Promise<IAuthToken> {
        return {
            access_token: {
                token: jwtSign({ userId: user.id }),
                expiresIn: 15
            },
            refresh_token: {
                token: jwtSign({ userId: user.id }),
                expiresIn: 1500
            }
        }
    }
}