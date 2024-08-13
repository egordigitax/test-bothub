import express from 'express';
import {BooksController} from "./representation/books/booksController";
import {UsersController} from "./representation/users/usersController";
import {errorHandler} from "./representation/middleware/errorHandle";
import {authMiddleware} from "./representation/middleware/authMiddleware";
import cookieParser from "cookie-parser"

const app = express()
const port = 3000

app.use(express.json())
app.use(cookieParser())
app.use(authMiddleware)


BooksController.addRoutes('/books', app)
UsersController.addRoutes('/users', app)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})