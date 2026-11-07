import { IsDateString, IsInt, IsNumber, Min } from 'class-validator';

export class CreatePenyewaanDto {
  @IsInt()
  pelangganId: number;

  @IsInt()
  kendaraanId: number;

  @IsNumber()
  @Min(0)
  total_biaya: number;

  @IsDateString()
  tanggal_sewa: string;
}
