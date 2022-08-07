import { Module } from '@nestjs/common';

import { UnitModule } from './unit/unit.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UnitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
