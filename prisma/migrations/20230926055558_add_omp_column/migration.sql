/*
  Warnings:
  - Added the required column `omp` to the `Server` table without a default value. This is not possible if the table is not empty.
*/
-- AlterTable
ALTER TABLE "Server" ADD COLUMN     "omp" BOOL NOT NULL;
