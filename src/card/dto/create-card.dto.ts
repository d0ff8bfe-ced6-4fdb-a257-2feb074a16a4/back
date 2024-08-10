import { IsDate, IsString, IsOptional, IsArray } from 'class-validator';
import { CreateTaskDto } from '../../task/dto/create-task.dto';
import { CreateTagDto } from '../../tag/dto/create-tag.dto';

export class CreateCardDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsDate()
    @IsOptional()
    timeStart?: Date;

    @IsDate()
    @IsOptional()
    timeEnd?: Date;

    @IsArray()
    @IsOptional()
    tasks?: CreateTaskDto[];

    @IsArray()
    @IsOptional()
    tags?: CreateTagDto[];

    @IsString()
    @IsOptional()
    boardId?: string;
}
