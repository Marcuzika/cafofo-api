import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { PropertyEntity } from './entity/property.entity';
import { CreatePropertyDto } from './dto/create-property.dto';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(PropertyEntity)
    private propertyRepository: Repository<PropertyEntity>,
  ) {}

  async postProperty(createBodyDto: CreatePropertyDto) {
    const property = await this.propertyRepository.save(createBodyDto);
    return property;
  }

  async getProperties() {
    const properties = await this.propertyRepository.find({});
    return properties;
  }
}
