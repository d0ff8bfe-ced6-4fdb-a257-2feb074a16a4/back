import { IsArray, IsDate, IsEnum, IsOptional, IsString } from 'class-validator';
import { ProjectTypeEnum } from '@prisma/client';
import { CreateBoardDto } from '../../board/dto/create-board.dto';

export class CreateProjectDto {
    @IsDate()
    startDate: Date;

    @IsDate()
    endDate: Date;

    @IsEnum(ProjectTypeEnum)
    type: ProjectTypeEnum;

    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    contributorIds?: string[];

    @IsArray()
    @IsOptional()
    boards?: CreateBoardDto[];
}
