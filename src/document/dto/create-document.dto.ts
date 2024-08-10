import { IsBoolean, IsDate, IsEnum, IsInt, IsString } from 'class-validator';
import { DocumentType } from '@prisma/client';

export class CreateDocumentDto {
    @IsString()
    name: string;

    @IsDate()
    createdAt: Date;

    @IsString()
    authorId: string;

    @IsInt()
    version: number;

    @IsBoolean()
    access: boolean;

    @IsEnum(DocumentType)
    type: DocumentType;
}
