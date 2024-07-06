/*
  Warnings:

  - A unique constraint covering the columns `[questionNumber]` on the table `Question` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "questionNumber" INT4 NOT NULL DEFAULT unique_rowid();

-- CreateIndex
CREATE UNIQUE INDEX "Question_questionNumber_key" ON "Question"("questionNumber");
