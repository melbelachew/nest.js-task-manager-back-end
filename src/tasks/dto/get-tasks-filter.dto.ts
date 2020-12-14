import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from '../task.model';

export class GetTasksFilterDto {
  @IsOptional() @IsIn([TaskStatus.ACTIVE, TaskStatus.OPEN, TaskStatus.RESOLVED]) status: TaskStatus;
  @IsOptional() @IsNotEmpty() search: string;
}