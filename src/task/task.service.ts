// src/task/task.service.ts

import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { PrismaService } from '@prisma/prisma.service';

@Injectable()
export class TaskService {
    constructor(private readonly prismaService: PrismaService) {
    }

    async create(createTaskDto: CreateTaskDto) {
        return this.prismaService.task.create({
            data: createTaskDto,
        });
    }

    async findAll() {
        return this.prismaService.task.findMany();
    }

    async findOne(id: string) {
        return this.prismaService.task.findUnique({
            where: { id },
        });
    }

    async remove(id: string) {
        return this.prismaService.task.delete({
            where: { id },
        });
    }
}
