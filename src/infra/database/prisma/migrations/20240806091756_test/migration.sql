-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "author" TEXT,
    "publicationDate" TIMESTAMP(3) NOT NULL,
    "genres" TEXT,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "books_title_key" ON "books"("title");
