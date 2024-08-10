// src/card/card.service.ts

import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { PrismaService } from '@prisma/prisma.service';

@Injectable()
export class CardService {
    constructor(private readonly prismaService: PrismaService) {
    }

    async create(createCardDto: CreateCardDto) {
        return this.prismaService.card.create({
            data: {
                title: createCardDto.title,
                description: createCardDto.description,
                timeStart: createCardDto.timeStart,
                timeEnd: createCardDto.timeEnd,
                tasks: {
                    createMany: {
                        data: createCardDto.tasks,
                    },
                },
                tags: {
                    createMany: {
                        data: createCardDto.tags,
                    },
                },
                Board: {
                    connect: {
                        id: createCardDto.boardId,
                    },
                },
            },
        });
    }

    async findAll() {
        return this.prismaService.card.findMany();
    }

    async findOne(id: string) {
        return this.prismaService.card.findUnique({
            where: { id },
        });
    }

    async remove(id: string) {
        return this.prismaService.card.delete({
            where: { id },
        });
    }
}
