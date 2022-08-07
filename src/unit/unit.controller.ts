import { Body, Controller, Get, Post } from '@nestjs/common';

import { UnitService } from './unit.service';
import { CreateUnitDto } from './dto/create-unit.dto';

@Controller('unit')
export class UnitController {
  constructor(private readonly unitService: UnitService) {}

  @Get()
  getUnits() {
    return this.unitService.getUnits();
  }

  @Post()
  postUnit(@Body() createUnitDto: CreateUnitDto) {
    return this.unitService.postUnit(createUnitDto);
  }
}
