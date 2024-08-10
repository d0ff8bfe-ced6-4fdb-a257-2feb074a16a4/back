-- CreateEnum
CREATE TYPE "ProjectTypeEnum" AS ENUM ('INPROGRESS', 'ASSIGNED', 'PENDING', 'INREVIEW', 'BLOCKED', 'COMPLETED', 'REJECTED', 'CANCELLED', 'SCHEDULED', 'DEFERRED');

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('WORD', 'PDF', 'EXCEL', 'PPTX', 'IMAGE');

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "type" "ProjectTypeEnum" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "task" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,
    "projectId" TEXT NOT NULL,
    "cardId" TEXT,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documents" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "access" BOOLEAN NOT NULL,
    "type" "DocumentType" NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "boards" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "boards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cards" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "start_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),
    "boardId" TEXT,

    CONSTRAINT "cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" TEXT NOT NULL,
    "tagName" TEXT NOT NULL,
    "color" TEXT,
    "cardId" TEXT,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectContributors" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectContributors_AB_unique" ON "_ProjectContributors"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectContributors_B_index" ON "_ProjectContributors"("B");

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "cards"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "boards"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags" ADD CONSTRAINT "tags_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "cards"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectContributors" ADD CONSTRAINT "_ProjectContributors_A_fkey" FOREIGN KEY ("A") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectContributors" ADD CONSTRAINT "_ProjectContributors_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
