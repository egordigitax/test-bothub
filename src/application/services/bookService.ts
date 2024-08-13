import { IBook } from "@domain/entities/IBook";
import { IBookService } from "../../domain/services/IBookService";
import { injectBooksRepository } from "../../infra/injectors/injectBooksRepository";
import { IBooksRepository } from "../../domain/repositories/IBooksRepository";

export class BookService implements IBookService{
    constructor(private booksRepository: IBooksRepository = injectBooksRepository()) {
    }

    async getBookById(id: number): Promise<IBook>{
        return this.booksRepository.getById(id);
    }

    async getBooks(): Promise<IBook[]> {
        return this.booksRepository.getAll()
    }

    async createBook(book: Omit<IBook, "id">): Promise<IBook> {
        return this.booksRepository.create(book);
    }

    async updateBook(book: IBook): Promise<IBook> {
        return this.booksRepository.update(book);
    }

    async deleteBook(id: number): Promise<IBook> {
        return this.booksRepository.delete(id);
    }
}