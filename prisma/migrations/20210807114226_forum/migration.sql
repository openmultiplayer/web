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

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "slug" TEXT,
    "body" TEXT NOT NULL,
    "short" TEXT NOT NULL,
    "first" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "userId" TEXT NOT NULL,
    "rootPostId" TEXT,
    "replyPostId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TagToPost" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Post.slug_unique" ON "Post"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Tag.name_unique" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_TagToPost_AB_unique" ON "_TagToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_TagToPost_B_index" ON "_TagToPost"("B");

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("rootPostId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("replyPostId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToPost" ADD FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToPost" ADD FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
