import { IsString, IsNumberString } from 'class-validator';

export class CreateAddressDto {
  @IsNumberString()
  lat: string;

  @IsNumberString()
  lng: string;

  @IsString()
  city: string;

  @IsString()
  type: string;

  @IsString()
  state: string;

  @IsString()
  country: string;

  @IsString()
  complexName: string;

  @IsString()
  neighbourhood: string;

  @IsString()
  streetFullName: string;
}
