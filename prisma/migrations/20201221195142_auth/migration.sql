/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[email]` on the table `User`. If there are existing duplicate values, the migration will fail.
  - Added the required column `authMethod` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AuthMethod" AS ENUM ('GITHUB', 'DISCORD');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "authMethod" "AuthMethod" NOT NULL,
ADD COLUMN     "admin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "GitHub" (
    "userId" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Discord" (
    "userId" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "GitHub.accountId_unique" ON "GitHub"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "GitHub.username_unique" ON "GitHub"("username");

-- CreateIndex
CREATE UNIQUE INDEX "GitHub.email_unique" ON "GitHub"("email");

-- CreateIndex
CREATE UNIQUE INDEX "GitHub_userId_unique" ON "GitHub"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Discord.accountId_unique" ON "Discord"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "Discord.username_unique" ON "Discord"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Discord.email_unique" ON "Discord"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Discord_userId_unique" ON "Discord"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- AddForeignKey
ALTER TABLE "GitHub" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discord" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
