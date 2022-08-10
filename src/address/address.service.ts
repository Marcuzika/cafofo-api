import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { AddressEntity } from './entity/address.entity';
import { CreateAddressDto } from './dto/create-address.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private addressRepository: Repository<AddressEntity>,
  ) {}

  async postAddress(createBodyDto: CreateAddressDto) {
    const address = await this.addressRepository.save(createBodyDto);
    return address;
  }

  async getAddresses() {
    const addresses = await this.addressRepository.find({});
    return addresses;
  }
}
