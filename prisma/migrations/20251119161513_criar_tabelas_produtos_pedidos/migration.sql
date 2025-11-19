/*
  Warnings:

  - You are about to drop the column `createdAt` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the `_pedidostoprodutos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_pedidostoprodutos` DROP FOREIGN KEY `_PedidosToProdutos_A_fkey`;

-- DropForeignKey
ALTER TABLE `_pedidostoprodutos` DROP FOREIGN KEY `_PedidosToProdutos_B_fkey`;

-- AlterTable
ALTER TABLE `pedidos` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;

-- DropTable
DROP TABLE `_pedidostoprodutos`;

-- CreateTable
CREATE TABLE `PedidosProdutos` (
    `id` VARCHAR(191) NOT NULL,
    `pedidoId` VARCHAR(191) NOT NULL,
    `produtoId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PedidosProdutos` ADD CONSTRAINT `PedidosProdutos_pedidoId_fkey` FOREIGN KEY (`pedidoId`) REFERENCES `Pedidos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PedidosProdutos` ADD CONSTRAINT `PedidosProdutos_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `Produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
