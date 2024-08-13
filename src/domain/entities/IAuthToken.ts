
export type IToken = {
    token: string;
    expiresIn: number;
}

export type IAuthToken = {
    access_token: IToken;
    refresh_token: IToken;
}