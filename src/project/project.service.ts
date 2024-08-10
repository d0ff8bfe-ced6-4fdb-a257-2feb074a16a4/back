import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { PrismaService } from '@prisma/prisma.service';

@Injectable()
export class ProjectService {
    constructor(private readonly prismaService: PrismaService) {
    }

    async create(createProjectDto: CreateProjectDto) {
        return this.prismaService.project.create({
            data: {
                startDate: createProjectDto.startDate,
                endDate: createProjectDto.endDate,
                type: createProjectDto.type,
                title: createProjectDto.title,
                description: createProjectDto.description,
                contributors: {
                    connect: createProjectDto.contributorIds?.map((id) => ({ id })),
                },
            },
        });
    }

    async findAll() {
        return this.prismaService.project.findMany();
    }

    async findOne(id: string) {
        return this.prismaService.project.findUnique({
            where: { id },
        });
    }
}
