import { tb_buddy } from './entities/buddy.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuddyController } from './buddy.controller';
import { BuddyService } from './buddy.service';

@Module({
  imports: [TypeOrmModule.forFeature([tb_buddy])],
  providers: [BuddyService],
  controllers: [BuddyController],
})
export class BuddyModule {}
