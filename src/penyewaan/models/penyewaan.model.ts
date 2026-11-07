import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Pelanggan } from './pelanggan.model';
import { Kendaraan } from './kendaraan.model';

@ObjectType()
export class Penyewaan {
  @Field(() => Int)
  id: number;

  @Field()
  tanggal_sewa: Date;

  @Field(() => Int)
  total_biaya: number;

  @Field(() => Pelanggan)
  pelanggan: Pelanggan;

  @Field(() => Kendaraan)
  kendaraan: Kendaraan;
}
