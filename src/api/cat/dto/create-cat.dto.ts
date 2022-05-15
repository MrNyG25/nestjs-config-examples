import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { EnumToString } from "src/helpers/enumToString";
import { CatCategory } from "../enums";

export class CreateCatDto {
    @ApiProperty({
      description: 'cat\'s breed',
      example: 'hairy'
    })
    @IsNotEmpty()
    @IsString()
    breed: string;

    @ApiProperty({
      description: 'Description',
      example: '...',
      nullable: true
    })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsArray()
    @IsString({each: true})
    tags: string[];

    @ApiProperty({
      description: `Category valid values ${EnumToString(CatCategory)}`,
      example: '...'
    })
    @IsNotEmpty()
    @IsEnum(CatCategory, {
      message: `Invalid option for category. Valids options are ${EnumToString(CatCategory)}`,
    })
    category: string;

    @ApiProperty({
      description: 'boolean value',
    })
    @IsBoolean()
    status: boolean;
}
