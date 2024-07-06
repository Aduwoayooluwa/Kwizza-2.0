-- AlterTable
ALTER TABLE "LeaderBoard" ADD COLUMN     "ageGroup" STRING NOT NULL DEFAULT 'young';

-- AlterTable
ALTER TABLE "Question" ALTER COLUMN "questionNumber" SET DEFAULT unique_rowid();
