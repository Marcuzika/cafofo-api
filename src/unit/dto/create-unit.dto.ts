import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUnitDto {
  @IsNotEmpty()
  @IsNumber()
  bedrooms: number;
}
