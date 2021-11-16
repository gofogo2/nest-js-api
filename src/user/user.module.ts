import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tb_user } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([tb_user])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
