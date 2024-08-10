-- CreateTable
CREATE TABLE "Tags" (
    "_id" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Genres" (
    "_id" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "Genres_pkey" PRIMARY KEY ("_id")
);
