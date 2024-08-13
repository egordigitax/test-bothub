import { prisma } from "@shared/db"

export class Database {
    constructor(public client = prisma) {
    }
}