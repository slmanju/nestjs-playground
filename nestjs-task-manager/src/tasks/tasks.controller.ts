import { Body, Controller, Delete, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { TaskDto, TaskFilterDto } from './task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAll(@Query() taskFilterDto: TaskFilterDto): Task[] {
    return this.taskService.findAll(taskFilterDto);
  }

  @Get('/:id')
  getOne(@Param('id') id: string): Task {
    return this.taskService.find(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() taskDto: TaskDto): Task {
    return this.taskService.create(taskDto);
  }

  @Delete('/:id')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    this.taskService.delete(id);
  }
}
