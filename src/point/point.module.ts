import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tb_point } from './entities/point.entity';
import { PointController } from './point.controller';
import { PointService } from './point.service';

@Module({
  imports: [TypeOrmModule.forFeature([tb_point])],
  providers: [PointService],
  controllers: [PointController],
})
export class PointModule {}
