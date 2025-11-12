/*
  Warnings:

  - Added the required column `preco` to the `Produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `produtos` ADD COLUMN `descricao` VARCHAR(191) NULL,
    ADD COLUMN `preco` DOUBLE NOT NULL;
