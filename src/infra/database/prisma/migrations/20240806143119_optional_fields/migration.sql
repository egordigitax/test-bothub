/*
  Warnings:

  - Made the column `title` on table `books` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "books" ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "publicationDate" DROP NOT NULL;
