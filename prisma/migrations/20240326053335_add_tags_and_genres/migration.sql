/*
  Warnings:

  - You are about to drop the column `tags` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "tags",
DROP COLUMN "type";

-- CreateTable
CREATE TABLE "genres" (
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "bookId" TEXT
);

-- CreateTable
CREATE TABLE "tags" (
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "bookId" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "genres_value_key" ON "genres"("value");

-- CreateIndex
CREATE UNIQUE INDEX "genres_label_key" ON "genres"("label");

-- CreateIndex
CREATE UNIQUE INDEX "tags_value_key" ON "tags"("value");

-- CreateIndex
CREATE UNIQUE INDEX "tags_label_key" ON "tags"("label");

-- AddForeignKey
ALTER TABLE "genres" ADD CONSTRAINT "genres_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags" ADD CONSTRAINT "tags_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("_id") ON DELETE SET NULL ON UPDATE CASCADE;
