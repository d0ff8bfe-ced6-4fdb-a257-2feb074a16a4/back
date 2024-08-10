// src/tag/tag.service.ts

import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { PrismaService } from '@prisma/prisma.service';

@Injectable()
export class TagService {
    constructor(private readonly prismaService: PrismaService) {
    }

    async create(createTagDto: CreateTagDto) {
        return this.prismaService.tag.create({
            data: createTagDto,
        });
    }

    async findAll() {
        return this.prismaService.tag.findMany();
    }

    async findOne(id: string) {
        return this.prismaService.tag.findUnique({
            where: { id },
        });
    }

    async remove(id: string) {
        return this.prismaService.tag.delete({
            where: { id },
        });
    }
}
