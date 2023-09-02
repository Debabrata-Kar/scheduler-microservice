# Scheduler Microservice

This is a scheduler microservice built using Nest.js, TypeScript, and PostgreSQL. It allows you to schedule and manage customized jobs, with flexibility in configuration. The service provides API endpoints for job management, including listing all jobs, retrieving details of a specific job by ID, and creating new jobs.

## Features

1. **Job Scheduling**: The microservice facilitates the scheduling of customized jobs with flexibility in configuration.

2. **API Endpoints**:
   - `GET /jobs`: Lists all available jobs, providing a comprehensive overview of the scheduled tasks.
   - `GET /jobs/:id`: Retrieves detailed information about a specific job, including its scheduling details.
   - `POST /jobs`: Allows users to create new jobs. The API validates input data and adds the job to the scheduling table.

3. **Database Integration**: The database contains fields such as job name, last run timestamp, next run timestamp, and other pertinent job details.

4. **Customization**: Each job is customizable, allowing users to define specific attributes, scheduling intervals, and other relevant parameters.

5. **Scalability**: The application is designed to handle increased application complexity, approximately 10,000 users spread globally, around 1,000 services, and up to 6,000 API requests per minute.

## Getting Started

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/scheduler-microservice.git
   cd scheduler-microservice

2.  Install dependencies:
   ```shell
   npm install

3.  Set up a PostgreSQL database and configure the connection settings in `src/app.module.ts`.

4.  Start the application:
   ```shell
   npm run start:dev

### Usage

-   Access the API:
    -   To list all jobs: `GET http://localhost:3000/jobs`
    -   To retrieve details of a specific job by ID: `GET http://localhost:3000/jobs/:id`
    -   To create a new job: `POST http://localhost:3000/jobs`

    `\
    `
