import { tb_beacon } from './entities/beacon.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeaconService } from './beacon.service';
import { BeaconController } from './beacon.controller';

@Module({
  imports: [TypeOrmModule.forFeature([tb_beacon])],
  providers: [BeaconService],
  controllers: [BeaconController],
})
export class BeaconModule {}
