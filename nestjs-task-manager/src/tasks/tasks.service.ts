import { Injectable } from '@nestjs/common';
import { TaskDto, TaskFilterDto } from './task.dto';
import { Task, TaskStatus } from './task.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll(taskFilterDto: TaskFilterDto) {
    let result: Task[] = this.tasks;
    const { status, search } = taskFilterDto;
    if (status) {
      result = result.filter(task => task.status === status);
    }
    if (search) {
      result = result.filter(task => task.title.includes(search) || task.description.includes(search));
    }
    return result;
  }

  create(taskDto: TaskDto): Task {
    const { title, description } = taskDto;
    const task: Task = {
      id: uuidv4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
  
    this.tasks.push(task);
    return task;
  }

  find(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  delete(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
