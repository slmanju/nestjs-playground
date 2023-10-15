import { TaskStatus } from "./task.model";

export class TaskDto {
  id: string;
  title: string;
  description: string;
}

export class TaskFilterDto {
  status: TaskStatus;
  search: string;
}