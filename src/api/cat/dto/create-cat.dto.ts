import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { EnumToString } from 'src/helpers/enumToString';
import { CatCategory } from '../enums';

export class CreateCatDto {
  @ApiProperty({
    description: "cat's breed",
    example: 'hairy',
  })
  @IsNotEmpty()
  @IsString()
  breed: string;

  @ApiProperty({
    description: 'Description',
    example: 'I am a cat',
    nullable: true,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: ['red', 'gray'],
  })
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @ApiProperty({
    description: `Category valid values ${EnumToString(CatCategory)}`,
    example: `${EnumToString(CatCategory)[0]}`,
  })
  @IsNotEmpty()
  @IsEnum(CatCategory, {
    message: `Invalid option for category. Valids options are ${EnumToString(
      CatCategory,
    )}`,
  })
  category: string;

  @ApiProperty({
    description: 'boolean value',
  })
  @IsBoolean()
  status: boolean;
}
