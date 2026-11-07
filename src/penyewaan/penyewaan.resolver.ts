import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { PenyewaanService } from './penyewaan.service';
import { Penyewaan } from './models/penyewaan.model';

@Resolver(() => Penyewaan)
export class PenyewaanResolver {
  constructor(private readonly service: PenyewaanService) {}

  @Query(() => [Penyewaan])
  daftarPenyewaan() {
    return this.service.findAll();
  }

  @Query(() => Penyewaan)
  penyewaan(@Args('id', { type: () => Int }) id: number) {
    return this.service.findOne(id);
  }
}
