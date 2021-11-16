import { tb_user } from './user/entities/user.entity';
import { tb_zone } from './zone/entities/zone.entity';
import { tb_zone_schedule } from './zone-schedule/entities/zone-schedule.entity';
import { tb_item } from './item/entities/item.entity';
import { tb_buddy } from './buddy/entities/buddy.entity';
import { tb_buddy_location } from './buddy-location/entities/buddy-location.entity';
import { tb_beacon } from './beacon/entities/beacon.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PointModule } from './point/point.module';
import * as Joi from 'joi';
import { tb_point } from './point/entities/point.entity';
import { UserModule } from './user/user.module';
import { BuddyModule } from './buddy/buddy.module';
import { ZoneScheduleModule } from './zone-schedule/zone-schedule.module';
import { BeaconModule } from './beacon/beacon.module';
import { ZoneModule } from './zone/zone.module';
import { ItemModule } from './item/item.module';
import { BuddyLocationModule } from './buddy-location/buddy-location.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'prod').required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: process.env.NODE_ENV !== 'prod',
      logging: true,
      entities: [
        tb_point,
        tb_beacon,
        tb_buddy_location,
        tb_buddy,
        tb_item,
        tb_zone_schedule,
        tb_zone,
        tb_item,
        tb_user,
      ],
    }),
    PointModule,
    BeaconModule,
    BuddyModule,
    BuddyLocationModule,
    ItemModule,
    UserModule,
    ZoneModule,
    ZoneScheduleModule,
  ],
})
export class AppModule {}
