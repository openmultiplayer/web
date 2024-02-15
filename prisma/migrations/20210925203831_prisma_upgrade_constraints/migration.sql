-- DropForeignKey
ALTER TABLE "Discord" DROP CONSTRAINT "Discord_userId_fkey";

-- DropForeignKey
ALTER TABLE "GitHub" DROP CONSTRAINT "GitHub_userId_fkey";

-- AddForeignKey
ALTER TABLE "GitHub" ADD CONSTRAINT "GitHub_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discord" ADD CONSTRAINT "Discord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "Discord.accountId_unique" RENAME TO "Discord_accountId_key";

-- RenameIndex
ALTER INDEX "Discord.email_unique" RENAME TO "Discord_email_key";

-- RenameIndex
ALTER INDEX "Discord.username_unique" RENAME TO "Discord_username_key";

-- RenameIndex
ALTER INDEX "GitHub.accountId_unique" RENAME TO "GitHub_accountId_key";

-- RenameIndex
ALTER INDEX "GitHub.email_unique" RENAME TO "GitHub_email_key";

-- RenameIndex
ALTER INDEX "GitHub.username_unique" RENAME TO "GitHub_username_key";

-- RenameIndex
ALTER INDEX "Rule_serverId_rule_name_index" RENAME TO "Rule_name_serverId_key";

-- RenameIndex
ALTER INDEX "Server.ip_unique" RENAME TO "Server_ip_key";

-- RenameIndex
ALTER INDEX "User.email_unique" RENAME TO "User_email_key";
