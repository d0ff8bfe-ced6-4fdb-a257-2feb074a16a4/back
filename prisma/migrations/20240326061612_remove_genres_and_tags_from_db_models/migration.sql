/*
  Warnings:

  - You are about to drop the `genres` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "genres" DROP CONSTRAINT "genres_bookId_fkey";

-- DropForeignKey
ALTER TABLE "tags" DROP CONSTRAINT "tags_bookId_fkey";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "genres" TEXT[],
ADD COLUMN     "tags" TEXT[];

-- DropTable
DROP TABLE "genres";

-- DropTable
DROP TABLE "tags";
