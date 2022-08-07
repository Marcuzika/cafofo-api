import { Injectable } from '@nestjs/common';

import { CreatePropertyDto } from './dto/create-property.dto';

@Injectable()
export class PropertyService {
  private readonly properties = [];

  postProperty(createBodyDto: CreatePropertyDto) {
    const createdAtTimeStamp = Date.now().toString();

    this.properties.push({
      ...createBodyDto,
      createdAtTimeStamp,
    });

    return this.properties[this.properties.length - 1];
  }

  getProperties() {
    return this.properties;
  }
}
