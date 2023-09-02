import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { JobService } from './job.service';
import { Job } from './job.entity';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  async findAll(): Promise<Job[]> {
    return this.jobService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Job | undefined> {
    return this.jobService.findOneById(id);
  }

  @Post()
  async create(@Body() jobData: Partial<Job>): Promise<Job> {
    return this.jobService.create(jobData);
  }
}
