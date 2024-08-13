import { Request, Response } from 'express';
import {BaseController} from "../baseController";
import {IBookService} from "../../domain/services/IBookService";
import {injectBooksService} from "../../application/injectors/services/injectBooksService";

export class BooksController extends BaseController{
    constructor(private bookService: IBookService = injectBooksService()){
        super()

        this.GET('/', async (req, res) => {
            const data = await this.bookService.getBooks()
            console.log(req['user'])
            res.json(data)
        })

        this.GET('/:id', async (req: Request, res: Response) => {
            const data = await this.bookService.getBookById(Number(req.params.id))
            res.json(data)
        })

        this.POST('/', async (req: Request, res: Response) => {
            const data = await this.bookService.createBook(req.body)
            res.json(data)
        }, { adminOnly: true })

        this.PUT('/:id', async (req: Request, res: Response) => {
            const data = await this.bookService.updateBook(req.body)
            res.json(data)
        }, { adminOnly: true })

        this.DELETE('/:id', async (req: Request, res: Response) => {
            const data = await this.bookService.deleteBook(Number(req.params.id))
            res.json(data)
        }, { adminOnly: true })
    }
}