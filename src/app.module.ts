import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobModule } from './jobs/job.module';
import { ScheduleModule } from '@nestjs/schedule';
import { Job } from './jobs/job.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'your_username',
      password: 'your_password',
      database: 'scheduler_db',
      entities: [Job],
      synchronize: true,
    }),
    ScheduleModule.forRoot(),
    JobModule,
  ],
})
export class AppModule {}
