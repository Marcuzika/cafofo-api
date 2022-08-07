import { Injectable } from '@nestjs/common';

import { CreateUnitDto } from './dto/create-unit.dto';

@Injectable()
export class UnitService {
  getUnits() {}
  postUnit(createUnitDto: CreateUnitDto) {
    return {
      message: 'Criei o Unit o/',
    };
  }
}
