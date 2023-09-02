import { Test, TestingModule } from '@nestjs/testing';
import { JobService } from './job.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';
import { NotFoundException } from '@nestjs/common';

describe('JobService', () => {
  let service: JobService;
  let jobRepository: Repository<Job>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JobService,
        {
          provide: getRepositoryToken(Job), 
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<JobService>(JobService);
    jobRepository = module.get<Repository<Job>>(getRepositoryToken(Job));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of jobs', async () => {
      const expectedJobs: Job[] = []; 

      jest.spyOn(jobRepository, 'find').mockResolvedValue(expectedJobs);

      const jobs = await service.findAll();

      expect(jobs).toBe(expectedJobs);
    });
  });

  describe('findOneById', () => {
    it('should return a specific job by ID', async () => {
      const jobId = 1; // Define a valid job ID here
      const expectedJob: Job = {
        id: jobId,
        name: ''
      }; 

      jest.spyOn(jobRepository, 'findOne').mockResolvedValue(expectedJob);

      const job = await service.findOneById(jobId);

      expect(job).toBe(expectedJob);
    });

    it('should throw a NotFoundException if job with ID is not found', async () => {
      const jobId = 12345; // Define an invalid job ID here

      jest.spyOn(jobRepository, 'findOne').mockResolvedValue(null);

      expect(async () => await service.findOneById(jobId)).rejects.toThrowError(
        NotFoundException,
      );
    });
  });

  describe('create', () => {
    it('should create and return a new job', async () => {
      const jobData: Partial<Job> = {};
  
      const createdJob: Job = {
        ...jobData as Job,
        id: 1, 
      };
  
      jest.spyOn(jobRepository, 'create').mockReturnValue(createdJob);
      jest.spyOn(jobRepository, 'save').mockResolvedValue(createdJob);
  
      const job = await service.create(jobData);
  
      expect(job).toBe(createdJob);
    });
  });
    
});
