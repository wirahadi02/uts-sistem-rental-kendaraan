import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pelanggan {
  @Field(() => Int)
  id: number;

  @Field()
  nama: string;
}
