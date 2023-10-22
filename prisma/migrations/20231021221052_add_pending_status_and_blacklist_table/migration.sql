-- AlterTable
ALTER TABLE "Server" ADD COLUMN     "pending" BOOL NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "ServerIPBlacklist" (
    "id" STRING NOT NULL,
    "ip" STRING NOT NULL,

    CONSTRAINT "ServerIPBlacklist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ServerIPBlacklist_ip_key" ON "ServerIPBlacklist"("ip");
