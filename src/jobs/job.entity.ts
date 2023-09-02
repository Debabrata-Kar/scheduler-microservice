import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ name: 'last_run_timestamp', type: 'timestamp', nullable: true })
  lastRunTimestamp?: Date;

  @Column({ name: 'next_run_timestamp', type: 'timestamp' })
  nextRunTimestamp?: Date;

  // Add other job details as needed
}