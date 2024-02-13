import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
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
}
