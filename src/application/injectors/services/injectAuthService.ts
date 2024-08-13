import {IAuthService} from "../../../domain/services/IAuthService";
import {AuthService} from "../../services/authService";

export function injectAuthService(): IAuthService {
    return new AuthService()
}