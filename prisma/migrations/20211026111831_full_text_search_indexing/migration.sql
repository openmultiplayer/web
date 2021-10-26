-- CreateIndex
CREATE INDEX "Post.title_body_index" ON "Post"("title", "body");

-- RenameIndex
ALTER INDEX "Category_name_key" RENAME TO "Category.name_unique";

-- RenameIndex
ALTER INDEX "Discord_accountId_key" RENAME TO "Discord.accountId_unique";

-- RenameIndex
ALTER INDEX "Discord_email_key" RENAME TO "Discord.email_unique";

-- RenameIndex
ALTER INDEX "Discord_username_key" RENAME TO "Discord.username_unique";

-- RenameIndex
ALTER INDEX "GitHub_accountId_key" RENAME TO "GitHub.accountId_unique";

-- RenameIndex
ALTER INDEX "GitHub_email_key" RENAME TO "GitHub.email_unique";

-- RenameIndex
ALTER INDEX "GitHub_username_key" RENAME TO "GitHub.username_unique";

-- RenameIndex
ALTER INDEX "Post_slug_key" RENAME TO "Post.slug_unique";

-- RenameIndex
ALTER INDEX "Rule_name_serverId_key" RENAME TO "Rule_serverId_rule_name_index";

-- RenameIndex
ALTER INDEX "Server_ip_key" RENAME TO "Server.ip_unique";

-- RenameIndex
ALTER INDEX "Tag_name_key" RENAME TO "Tag.name_unique";

-- RenameIndex
ALTER INDEX "User_email_key" RENAME TO "User.email_unique";
