import {prisma} from '@shared/db'
import {IUser} from "../../../domain/entities/IUser";
import {IUsersRepository} from "../../../domain/repositories/IUsersRepository";

export class UsersRepository implements IUsersRepository{
    public async getById(id: number): Promise<IUser> {
        const query = await prisma.user.findUnique({
            where: {id}
        })

        return <IUser>{
            id: query.id,
            username: query.username,
            role: query.role,
            password: query.password,
            salt: query.salt,
        }
    }

    public async getByUsername(username: string): Promise<IUser> {
        const query = await prisma.user.findUnique({
            where: { username }
        })

        return <IUser>{
            id: query.id,
            username: query.username,
            role: query.role,
            password: query.password,
            salt: query.salt,
        }
    }

    async getAll(): Promise<IUser[]> {
        const query = await prisma.user.findMany()

        return query.map(user => <IUser>{
            id: user.id,
            username: user.username,
            role: user.role,
            password: user.password,
            salt: user.salt
        })
    }

    public async create(user: IUser): Promise<IUser> {
        return prisma.user.create({
            data: {
                username: user.username,
                role: user.role,
                password: user.password,
                salt: user.salt
            }
        });
    }

    public async update(user: IUser): Promise<IUser> {
        return prisma.user.update({
            where: {id: user.id},
            data: {
                username: user.username,
                role: user.role,
                password: user.password,
                salt: user.salt
            }
        });
    }
}