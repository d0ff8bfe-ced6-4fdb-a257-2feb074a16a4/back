// src/board/board.service.ts

import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { PrismaService } from '@prisma/prisma.service';

@Injectable()
export class BoardService {
    constructor(private readonly prismaService: PrismaService) {
    }

    async create(createBoardDto: CreateBoardDto) {
        return this.prismaService.board.create({
            data: createBoardDto,
        });
    }

    async findAll() {
        return this.prismaService.board.findMany();
    }

    async findOne(id: string) {
        return this.prismaService.board.findUnique({
            where: { id },
        });
    }

    async remove(id: string) {
        return this.prismaService.board.delete({
            where: { id },
        });
    }
}
