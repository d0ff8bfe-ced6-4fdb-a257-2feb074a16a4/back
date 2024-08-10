/*
  Warnings:

  - You are about to drop the column `about` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `provider` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `sex` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `Book` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Chapter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Genres` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_userId_fkey";

-- DropForeignKey
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_bookId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "about",
DROP COLUMN "city",
DROP COLUMN "provider",
DROP COLUMN "sex",
DROP COLUMN "username";

-- DropTable
DROP TABLE "Book";

-- DropTable
DROP TABLE "Chapter";

-- DropTable
DROP TABLE "Genres";

-- DropTable
DROP TABLE "Tags";

-- DropEnum
DROP TYPE "Provider";
