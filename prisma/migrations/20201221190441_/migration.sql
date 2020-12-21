-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "Server.ip_unique" ON "Server"("ip");

-- CreateIndex
CREATE UNIQUE INDEX "Rule_serverId_rule_name_index" ON "Rule"("name", "serverId");

-- AddForeignKey
ALTER TABLE "Server" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rule" ADD FOREIGN KEY("serverId")REFERENCES "Server"("id") ON DELETE SET NULL ON UPDATE CASCADE;
