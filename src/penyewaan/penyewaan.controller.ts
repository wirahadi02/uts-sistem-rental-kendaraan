import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { PenyewaanService } from './penyewaan.service';
import { CreatePenyewaanDto } from './dto/create-penyewaan.dto';

@Controller('penyewaan')
export class PenyewaanController {
  constructor(private readonly service: PenyewaanService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: CreatePenyewaanDto) {
    return this.service.create(dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
