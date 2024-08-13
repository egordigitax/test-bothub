import {IBook} from "../entities/IBook";


export interface IBooksRepository {
    getById(id: number): Promise<IBook>,
    getAll(): Promise<IBook[]>,
    create(book: IBook): Promise<IBook>,
    update(book: IBook): Promise<IBook>,
    delete(id: number): Promise<IBook>,
}