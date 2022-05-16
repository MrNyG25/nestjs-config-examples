import { OmitType, PartialType } from '@nestjs/swagger' //'@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';

export class UpdateCatDto extends  PartialType(
    OmitType(CreateCatDto, ['breed', 'description'] as const),
  ) {}
