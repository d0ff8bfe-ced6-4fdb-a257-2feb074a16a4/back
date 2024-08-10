-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_projectId_fkey";

-- AlterTable
ALTER TABLE "boards" ADD COLUMN     "projectId" TEXT;

-- AddForeignKey
ALTER TABLE "boards" ADD CONSTRAINT "boards_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;
