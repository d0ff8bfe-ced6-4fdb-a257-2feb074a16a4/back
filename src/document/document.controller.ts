import { Controller, Get, Post, Body } from '@nestjs/common';
import { DocumentService } from './document.service';
import { CreateDocumentDto } from './dto/create-document.dto';

@Controller('document')
export class DocumentController {
    constructor(private readonly documentService: DocumentService) {
    }

    @Post()
    create(@Body() createDocumentDto: CreateDocumentDto) {
        return this.documentService.create(createDocumentDto);
    }

    @Get()
    findAll() {
        return this.documentService.findAll();
    }
}
