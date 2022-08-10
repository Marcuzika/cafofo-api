import { IsBoolean, IsNumber } from 'class-validator';

export class CreatePropertyDto {
  @IsNumber()
  area: number;

  @IsNumber()
  bedrooms: number;

  @IsNumber()
  complexFee: number;

  @IsBoolean()
  isMarketplace: boolean;

  @IsBoolean()
  isRentable: boolean;

  @IsNumber()
  price: number;
}
