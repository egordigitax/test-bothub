"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var booksController_1 = require("./representation/books/booksController");
var app = express();
var port = 3000;
var booksController = new booksController_1.BooksController();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.use('/books', booksController.router);
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
