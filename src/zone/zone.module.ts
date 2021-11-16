import { tb_zone } from './entities/zone.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZoneService } from './zone.service';
import { ZoneController } from './zone.controller';

@Module({
  imports: [TypeOrmModule.forFeature([tb_zone])],
  providers: [ZoneService],
  controllers: [ZoneController],
})
export class ZoneModule {}
