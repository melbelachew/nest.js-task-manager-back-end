import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly validStatuses = [
    TaskStatus.OPEN,
    TaskStatus.ACTIVE,
    TaskStatus.RESOLVED
  ]

  transform(value: any) {
    value = value.toUpperCase()
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is invalid`)
    }
    return value;

  }

  private isStatusValid(status: any) {
    const index = this.validStatuses.indexOf(status);
    return index !== -1;
  }
}