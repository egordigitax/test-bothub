import {injectAuthService} from "../../application/injectors/services/injectAuthService";

export async function authMiddleware (req, res, next) {
    const authService = injectAuthService()
    if(req.cookies.access_token){
        req.user = await authService.validateToken(req.cookies.access_token)
    }
    next()
}