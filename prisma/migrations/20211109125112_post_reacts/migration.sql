-- CreateTable
CREATE TABLE "React" (
    "id" TEXT NOT NULL,
    "emoji" BIGINT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "React_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "React" ADD CONSTRAINT "React_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "React" ADD CONSTRAINT "React_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
