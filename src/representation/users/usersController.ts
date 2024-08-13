import { Request, Response } from 'express';
import { BaseController } from "../baseController";
import { IUserService } from "../../domain/services/IUserService";
import { IAuthService } from "../../domain/services/IAuthService";
import { injectAuthService } from "../../application/injectors/services/injectAuthService";
import { injectUsersService } from "../../application/injectors/services/injectUsersService";

export class UsersController extends BaseController{
    constructor(
        private userService: IUserService = injectUsersService(),
        private authService: IAuthService = injectAuthService()
    ){
        super()

        this.GET('/me', async (req: Request, res: Response) => {
            const data = await this.userService.getUserById(req['user']['id'])
            res.json(data)
        }, {
            authOnly: true
        })

        this.POST('/register', async (req: Request, res: Response) => {
            const data = await this.userService.createUser(req.body['username'], req.body['password'])
            const tokens = await authService.authUser(req.body['username'], req.body['password'])
            res.cookie('access_token', tokens.access_token.token);
            res.cookie('refresh_token', tokens.refresh_token.token);
            res.json(data)
        })

        this.POST('/login',  async (req: Request, res: Response) => {
            const data = await this.authService.authUser(req.body.username, req.body.password);
            res.cookie('access_token', data.access_token.token);
            res.cookie('refresh_token', data.refresh_token.token);
            res.json(data)
        })

        this.PUT('/:id/role', async (req: Request, res: Response) => {
            const data = await this.userService.updateRole(Number(req.params.id), req.body.role)
            res.json(data)
        }, {
            adminOnly: true
        })
    }
}