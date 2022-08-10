import { Controller, Get, Post, Body } from '@nestjs/common';

import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';

@Controller('/address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  postAddress(@Body() createBodyDto: CreateAddressDto) {
    return this.addressService.postAddress(createBodyDto);
  }

  @Get()
  getAddress() {
    return this.addressService.getAddresses();
  }
}
