"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const job_service_1 = require("./job.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const job_entity_1 = require("./job.entity");
const common_1 = require("@nestjs/common");
describe('JobService', () => {
    let service;
    let jobRepository;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                job_service_1.JobService,
                {
                    provide: (0, typeorm_1.getRepositoryToken)(job_entity_1.Job),
                    useClass: typeorm_2.Repository,
                },
            ],
        }).compile();
        service = module.get(job_service_1.JobService);
        jobRepository = module.get((0, typeorm_1.getRepositoryToken)(job_entity_1.Job));
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    describe('findAll', () => {
        it('should return an array of jobs', async () => {
            const expectedJobs = [];
            jest.spyOn(jobRepository, 'find').mockResolvedValue(expectedJobs);
            const jobs = await service.findAll();
            expect(jobs).toBe(expectedJobs);
        });
    });
    describe('findOneById', () => {
        it('should return a specific job by ID', async () => {
            const jobId = 1; // Define a valid job ID here
            const expectedJob = {
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
            expect(async () => await service.findOneById(jobId)).rejects.toThrowError(common_1.NotFoundException);
        });
    });
    describe('create', () => {
        it('should create and return a new job', async () => {
            const jobData = {};
            const createdJob = {
                ...jobData,
                id: 1,
            };
            jest.spyOn(jobRepository, 'create').mockReturnValue(createdJob);
            jest.spyOn(jobRepository, 'save').mockResolvedValue(createdJob);
            const job = await service.create(jobData);
            expect(job).toBe(createdJob);
        });
    });
});
