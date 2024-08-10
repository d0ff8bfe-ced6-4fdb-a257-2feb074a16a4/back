// src/task/task.controller.ts

import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {
    }

    @Post()
    create(@Body() createTaskDto: CreateTaskDto) {
        return this.taskService.create(createTaskDto);
    }

    @Get()
    findAll() {
        return this.taskService.findAll();
    }

}
