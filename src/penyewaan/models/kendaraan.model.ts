import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Kendaraan {
  @Field(() => Int)
  id: number;

  @Field()
  merk: string;

  @Field()
  plat_nomor: string;

  @Field(() => Int)
  harga_sewa: number;
}
