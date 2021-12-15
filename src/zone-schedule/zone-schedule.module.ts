import { tb_zone_time } from './entities/zone-time';
import { tb_zone_schedule } from './entities/zone-schedule.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZoneScheduleService } from './zone-schedule.service';
import { ZoneScheduleController } from './zone-schedule.controller';

@Module({
  imports: [TypeOrmModule.forFeature([tb_zone_schedule, tb_zone_time])],
  providers: [ZoneScheduleService],
  controllers: [ZoneScheduleController],
})
export class ZoneScheduleModule {}
