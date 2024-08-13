import {IBookService} from "../../../domain/services/IBookService";
import {BookService} from "../../services/bookService";

export function injectBooksService(): IBookService {
    return new BookService()
}