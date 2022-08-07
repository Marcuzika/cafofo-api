import { Controller, Get, Post, Body } from '@nestjs/common';

import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';

@Controller('/property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Post()
  postProperty(@Body() createBodyDto: CreatePropertyDto) {
    return this.propertyService.postProperty(createBodyDto);
  }

  @Get()
  getProperty() {
    return this.propertyService.getProperties();
  }
}
