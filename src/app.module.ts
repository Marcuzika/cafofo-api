import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PropertyModule } from './property/property.module';
import { AddressModule } from './address/address.module';
import { typeOrmConfig } from './configs/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    PropertyModule,
    AddressModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
