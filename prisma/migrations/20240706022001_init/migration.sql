-- DropIndex
DROP INDEX "Question_questionNumber_key";

-- AlterTable
ALTER TABLE "Question" ALTER COLUMN "questionNumber" SET DEFAULT unique_rowid();
