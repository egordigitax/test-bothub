import crypto from "node:crypto";
import jwt from "jsonwebtoken"

export function hashPassword(password: string, salt: string): Promise<string> {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(
            password,
            salt,
            10000,
            128,
            'sha256',
            (err, derivedKey) => {
                if (err) reject(err);
                resolve(derivedKey.toString())
            })
    })
}

export function generateSalt(): Promise<string> {
    return new Promise((resolve) => {
        resolve(crypto.randomBytes(128).toString('base64'))
    })
}

export function jwtSign(obj: any){
    return jwt.sign(obj, process.env.JWT_SECRET)
}

export function jwtVerify(token: string): { userId: number }{
    const data = jwt.verify(token, process.env.JWT_SECRET)
    console.log(JSON.stringify(data))
    return JSON.parse(JSON.stringify(data))
}