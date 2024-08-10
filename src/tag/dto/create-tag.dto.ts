import { IsOptional, IsString } from 'class-validator';

export class CreateTagDto {
    @IsString()
    tagName: string;

    @IsOptional()
    @IsString()
    color?: string;
}
