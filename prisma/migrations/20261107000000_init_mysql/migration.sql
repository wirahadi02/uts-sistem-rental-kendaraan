CREATE TABLE `Pelanggan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `Kendaraan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `merk` VARCHAR(191) NOT NULL,
    `plat_nomor` VARCHAR(191) NOT NULL,
    `harga_sewa` INTEGER NOT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `Penyewaan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal_sewa` DATETIME(3) NOT NULL,
    `total_biaya` INTEGER NOT NULL,
    `pelangganId` INTEGER NOT NULL,
    `kendaraanId` INTEGER NOT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE `Penyewaan`
    ADD CONSTRAINT `Penyewaan_pelangganId_fkey`
    FOREIGN KEY (`pelangganId`) REFERENCES `Pelanggan`(`id`)
    ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE `Penyewaan`
    ADD CONSTRAINT `Penyewaan_kendaraanId_fkey`
    FOREIGN KEY (`kendaraanId`) REFERENCES `Kendaraan`(`id`)
    ON DELETE RESTRICT ON UPDATE CASCADE;
