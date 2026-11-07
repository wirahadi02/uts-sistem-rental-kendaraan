-- Archived SQLite migration; kept for reference after switching to MariaDB.
-- CreateTable
CREATE TABLE "Pelanggan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Kendaraan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "merk" TEXT NOT NULL,
    "plat_nomor" TEXT NOT NULL,
    "harga_sewa" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Penyewaan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tanggal_sewa" DATETIME NOT NULL,
    "total_biaya" INTEGER NOT NULL,
    "pelangganId" INTEGER NOT NULL,
    "kendaraanId" INTEGER NOT NULL,
    CONSTRAINT "Penyewaan_pelangganId_fkey" FOREIGN KEY ("pelangganId") REFERENCES "Pelanggan" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Penyewaan_kendaraanId_fkey" FOREIGN KEY ("kendaraanId") REFERENCES "Kendaraan" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
