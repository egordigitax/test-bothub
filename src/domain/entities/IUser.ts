export enum Role {
    USER = 0,
    ADMIN = 1,
}

export type IUser = {
    id?: number,
    username: string,
    role: Role
    password: string
    salt: string
}

export type IUserRepresentation = Omit<IUser, "password" | "salt">