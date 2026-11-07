import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePenyewaanDto } from './dto/create-penyewaan.dto';

@Injectable()
export class PenyewaanService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.penyewaan.findMany({
      include: { pelanggan: true, kendaraan: true },
    });
  }

  // 3a: ambil detail satu penyewaan beserta pelanggan dan kendaraan
  async findOne(id: number) {
    const data = await this.prisma.penyewaan.findUnique({
      where: { id },
      include: { pelanggan: true, kendaraan: true },
    });
    if (!data) {
      throw new NotFoundException(`Penyewaan dengan id ${id} tidak ditemukan`);
    }
    return data;
  }

  create(dto: CreatePenyewaanDto) {
    return this.prisma.penyewaan.create({
      data: {
        pelangganId: dto.pelangganId,
        kendaraanId: dto.kendaraanId,
        total_biaya: dto.total_biaya,
        tanggal_sewa: new Date(dto.tanggal_sewa),
      },
      include: { pelanggan: true, kendaraan: true },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.penyewaan.delete({ where: { id } });
  }
}
