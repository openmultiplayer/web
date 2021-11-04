-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "colour" TEXT NOT NULL DEFAULT E'#8577ce',
ADD COLUMN     "description" TEXT NOT NULL DEFAULT E'(No description)';
