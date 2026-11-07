import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const pelanggan = await prisma.pelanggan.create({
    data: { nama: 'Wira 023' },
  });

  const kendaraan = await prisma.kendaraan.create({
    data: { merk: 'Toyota Avanza', plat_nomor: 'DR 023 AB', harga_sewa: 50023 },
  });

  await prisma.penyewaan.create({
    data: {
      tanggal_sewa: new Date('2026-11-05'),
      total_biaya: 50023,
      pelangganId: pelanggan.id,
      kendaraanId: kendaraan.id,
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
