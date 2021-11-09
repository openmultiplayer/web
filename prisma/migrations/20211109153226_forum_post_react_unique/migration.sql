/*
  Warnings:

  - A unique constraint covering the columns `[emoji,postId,userId]` on the table `React` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "React_emoji_postId_userId_key" ON "React"("emoji", "postId", "userId");
