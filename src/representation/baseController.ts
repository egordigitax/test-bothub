import { Application, Router, Request, Response } from "express";
import { NotPrivilegedError, UnauthorizedError } from "../domain/errors/AuthErrors";
import { IBaseControllerOptions } from "../domain/controllers/IBaseController";
import { Role } from "../domain/entities/IUser";


export class BaseController{
    public router: Router = Router();

    static addRoutes(path: string, app: Application){
        app.use(path, new this().router)
    }

    GET(path: string, callback: (req: Request, res: Response) => Promise<void>, options?: IBaseControllerOptions){
        this.router.get(path, async (req: Request, res: Response, next) => {
            try {
                if(options?.authOnly && !req['user']) throw new UnauthorizedError()
                if(options?.adminOnly && req['user']['role'] != Role.ADMIN) throw new NotPrivilegedError()
                await callback(req, res)
            } catch (error) {
                next(error)
            }
        })
    }

    POST(path: string, callback: (req: Request, res: Response) => Promise<void>, options?: IBaseControllerOptions){
        this.router.post(path, async (req: Request, res: Response, next) => {
            try {
                if(options?.authOnly && !req['user']) throw new UnauthorizedError()
                if(options?.adminOnly && req['user']['role'] != Role.ADMIN) throw new NotPrivilegedError()
                await callback(req, res)
            } catch(error){
                next(error)
            }
        })
    }

    PUT(path: string, callback: (req: Request, res: Response) => Promise<void>, options?: IBaseControllerOptions){
        this.router.put(path, async (req: Request, res: Response, next) => {
            try {
                if(options?.authOnly && !req['user']) throw new UnauthorizedError()
                if(options?.adminOnly && req['user']['role'] != Role.ADMIN) throw new NotPrivilegedError()
                await callback(req, res)
            } catch(error){
                next(error)
            }
        })
    }

    DELETE(path: string, callback: (req: Request, res: Response) => Promise<void>, options?: IBaseControllerOptions){
        this.router.delete(path, async (req: Request, res: Response, next) => {
            try {
                if(options?.authOnly && !req['user']) throw new UnauthorizedError()
                if(options?.adminOnly && req['user']['role'] != Role.ADMIN) throw new NotPrivilegedError()
                await callback(req, res)
            } catch(error){
                next(error)
            }
        })
    }

    PATCH(path: string, callback: (req: Request, res: Response) => Promise<void>, options?: IBaseControllerOptions){
        this.router.patch(path, async (req: Request, res: Response, next) => {
            try {
                if(options?.authOnly && !req['user']) throw new UnauthorizedError()
                if(options?.adminOnly && req['user']['role'] != Role.ADMIN) throw new NotPrivilegedError()
                await callback(req, res)
            } catch(error){
                next(error)
            }
        })
    }
}