import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CatService } from './cat.service';
import {UpdateCatDto } from './dto';
import { CreateCatDto } from './dto/create-cat.dto';

@ApiTags('cats')
@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return await this.catService.create(createCatDto);
  }

  @Get()
  @ApiOperation({summary: 'Cats list'})
  async findAll() {
    const data = await this.catService.findAll();
    return {
      data
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catService.remove(+id);
  }
}
