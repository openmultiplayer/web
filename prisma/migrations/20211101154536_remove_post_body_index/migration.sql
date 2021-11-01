-- DropIndex
DROP INDEX "Post_title_body_idx";

-- CreateIndex
CREATE INDEX "Post_title_idx" ON "Post"("title");
