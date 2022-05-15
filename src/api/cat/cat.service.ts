import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCatDto, UpdateCatDto } from './dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatService {
  
  constructor(@InjectRepository(Cat) private readonly catRepository: Repository<Cat>){}

  async create(createCatDto: CreateCatDto) {
    const cat = this.catRepository.create(createCatDto);
    return await this.catRepository.save(cat);
  }

  async findAll(): Promise<Cat[]> {
    return await this.catRepository.find();
  }

  async findOne(id: number) {
    const cat = await this.catRepository.findOne(id);

    if(!cat) throw new HttpException('Cat not found', HttpStatus.NOT_FOUND);

    return cat;
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    const cat = await this.catRepository.findOne(id);

    if(!cat) throw new HttpException('Cat not found', HttpStatus.NOT_FOUND);

    const editedCat = Object.assign(cat, updateCatDto);
    
    return await this.catRepository.save(editedCat);
  }

  async remove(id: number) {

    const deletedCat = await this.catRepository.delete(id);

    if (!deletedCat.affected) {
      throw new HttpException('Cat not found', HttpStatus.NOT_FOUND);
    }
    
    return deletedCat;
  }
}
