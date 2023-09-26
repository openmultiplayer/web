/*
  Warnings:

  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.

*/
-- DropIndex
DROP INDEX "Discord_userId_unique";

-- DropIndex
DROP INDEX "GitHub_userId_unique";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(64);
