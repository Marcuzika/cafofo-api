import { IsNumber, IsString } from 'class-validator';

export class CreatePropertyDto {
  @IsNumber()
  price: number;

  @IsNumber()
  bedrooms: number;

  @IsNumber()
  area: number;

  @IsString()
  name: string;

  // @IsDateString()
  // createdAt: Date;

  // @IsNumber()
  // createdAtTimeStamp: number;
}
