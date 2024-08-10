// src/tag/tag.controller.ts

import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { TagService } from './tag.service';

@Controller('tags')
export class TagController {
    constructor(private readonly tagService: TagService) {
    }

    @Post()
    create(@Body() createTagDto: CreateTagDto) {
        return this.tagService.create(createTagDto);
    }

    @Get()
    findAll() {
        return this.tagService.findAll();
    }
}
