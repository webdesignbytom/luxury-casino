/*
  Warnings:

  - You are about to drop the column `userId` on the `Design` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Design" DROP CONSTRAINT "Design_userId_fkey";

-- AlterTable
ALTER TABLE "Design" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstName",
DROP COLUMN "lastName";
