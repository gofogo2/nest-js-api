import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';
import { TestController } from './test.controller';
import { TestService } from './test.service';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  providers: [TestService],
  controllers: [TestController],
})
export class TestModule {}
