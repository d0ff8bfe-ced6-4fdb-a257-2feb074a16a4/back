// src/project/project.controller.ts

import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {
    }

    @Post()
    create(@Body() createProjectDto: CreateProjectDto) {
        return this.projectService.create(createProjectDto);
    }

    @Get()
    findAll() {
        return this.projectService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.projectService.findOne(id);
    }
}
