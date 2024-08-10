// src/document/document.service.ts

import { Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { PrismaService } from '@prisma/prisma.service';

@Injectable()
export class DocumentService {
    constructor(private readonly prismaService: PrismaService) {
    }

    async create(createDocumentDto: CreateDocumentDto) {
        return this.prismaService.document.create({
            data: createDocumentDto,
        });
    }

    async findAll() {
        return this.prismaService.document.findMany();
    }

    async findOne(id: string) {
        return this.prismaService.document.findUnique({
            where: { id },
        });
    }

    async remove(id: string) {
        return this.prismaService.document.delete({
            where: { id },
        });
    }
}
