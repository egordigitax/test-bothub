import { prisma } from '@shared/db'
import {IBook} from "@domain/entities/IBook";
import {IBooksRepository} from "../../../domain/repositories/IBooksRepository";

export class BooksRepository implements IBooksRepository{
    public async getById(id: number): Promise<IBook> {
        const query = await prisma.book.findUnique({
            where: {id}
        })

        return <IBook>{
            id: query.id,
            title: query.title,
            author: query.author,
            genres: query.genres,
            publicationDate: query.publicationDate
        }
    }

    async getAll(): Promise<IBook[]> {
        const query = await prisma.book.findMany()

        return query.map(book => <IBook>{
            id: book.id,
            title: book.title,
            author: book.author,
            genres: book.genres,
            publicationDate: book.publicationDate
        })
    }

    public async create(book: IBook): Promise<IBook> {
        return prisma.book.create({
            data: {
                title: book.title,
                author: book.author,
                publicationDate: book.publicationDate,
                genres: book.genres,
            }
        });
    }

    public async update(book: IBook): Promise<IBook> {
        return prisma.book.update({
            where: {id: book.id},
            data: {
                title: book.title,
                author: book.author,
                publicationDate: book.publicationDate,
                genres: book.genres,
            }
        });
    }

    public async delete(id: number): Promise<IBook> {
        return prisma.book.delete({
            where: { id },
        });
    }
}