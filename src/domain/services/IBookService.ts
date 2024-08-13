import {IBook} from "../entities/IBook";


export interface IBookService {
    getBookById(id: number): Promise<IBook>
    getBooks(): Promise<IBook[]>
    createBook(book: Omit<IBook, "id">): Promise<IBook>
    updateBook(book: IBook): Promise<IBook>
    deleteBook(id: number): Promise<IBook>
}