import { tb_item } from './entities/item.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';

@Module({
  imports: [TypeOrmModule.forFeature([tb_item])],
  providers: [ItemService],
  controllers: [ItemController],
})
export class ItemModule {}
