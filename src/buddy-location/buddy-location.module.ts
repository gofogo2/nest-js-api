import { tb_buddy_location } from './entities/buddy-location.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuddyLocationService } from './buddy-location.service';
import { BuddyLocationController } from './buddy-location.controller';

@Module({
  imports: [TypeOrmModule.forFeature([tb_buddy_location])],
  providers: [BuddyLocationService],
  controllers: [BuddyLocationController],
})
export class BuddyLocationModule {}
