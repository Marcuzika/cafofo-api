import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PropertyEntity } from './entity/property.entity';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';

@Module({
  imports: [TypeOrmModule.forFeature([PropertyEntity])],
  controllers: [PropertyController],
  providers: [PropertyService],
})
export class PropertyModule {}
