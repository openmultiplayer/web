-- CreateEnum
CREATE TYPE "AuthMethod" AS ENUM ('GITHUB', 'DISCORD');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "authMethod" "AuthMethod" NOT NULL,
    "name" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "Server" (
    "id" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "hn" TEXT NOT NULL,
    "pc" INTEGER NOT NULL,
    "pm" INTEGER NOT NULL,
    "gm" TEXT NOT NULL,
    "la" TEXT NOT NULL,
    "pa" BOOLEAN NOT NULL,
    "vn" TEXT NOT NULL,
    "domain" TEXT,
    "description" TEXT,
    "banner" TEXT,
    "userId" TEXT,
    "active" BOOLEAN NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rule" (
"id" SERIAL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "serverId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

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
CREATE UNIQUE INDEX "Server.ip_unique" ON "Server"("ip");

-- CreateIndex
CREATE UNIQUE INDEX "Rule_serverId_rule_name_index" ON "Rule"("name", "serverId");

-- AddForeignKey
ALTER TABLE "GitHub" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discord" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Server" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rule" ADD FOREIGN KEY("serverId")REFERENCES "Server"("id") ON DELETE SET NULL ON UPDATE CASCADE;
