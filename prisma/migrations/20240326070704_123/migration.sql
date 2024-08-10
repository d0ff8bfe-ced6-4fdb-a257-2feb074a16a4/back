/*
  Warnings:

  - A unique constraint covering the columns `[value]` on the table `Genres` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[value]` on the table `Tags` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Genres_value_key" ON "Genres"("value");

-- CreateIndex
CREATE UNIQUE INDEX "Tags_value_key" ON "Tags"("value");
