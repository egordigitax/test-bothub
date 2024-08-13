import {IBooksRepository} from "../../domain/repositories/IBooksRepository";
import {BooksRepository} from "../database/repositories/booksRepository";


export function injectBooksRepository(): IBooksRepository {
    return new BooksRepository()
}