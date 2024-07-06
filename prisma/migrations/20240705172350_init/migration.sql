/*
  Warnings:

  - You are about to drop the column `attempts` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `correct` on the `Question` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "attempts";
ALTER TABLE "Question" DROP COLUMN "correct";
