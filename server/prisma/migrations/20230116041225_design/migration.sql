/*
  Warnings:

  - Added the required column `pattern` to the `Design` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Design" ADD COLUMN     "colours" TEXT[],
ADD COLUMN     "dimensions" INTEGER[],
ADD COLUMN     "pattern" TEXT NOT NULL;
