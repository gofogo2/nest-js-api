import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModule } from './test/test.module';
import { Photo } from './test/entities/photo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: '1',
      database: 'testApi',
      synchronize: true,
      logging: true,
      entities: [Photo],
    }),
    TestModule,
  ],
})
export class AppModule {}
