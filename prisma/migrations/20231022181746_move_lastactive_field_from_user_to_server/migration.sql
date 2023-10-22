/*
  Warnings:

  - You are about to drop the column `lastActive` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Server" ADD COLUMN     "lastActive" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "lastActive";
