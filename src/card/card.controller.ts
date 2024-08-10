// src/card/card.controller.ts

import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { CardService } from './card.service';

@Controller('cards')
export class CardController {
    constructor(private readonly cardService: CardService) {
    }

    @Post()
    create(@Body() createCardDto: CreateCardDto) {
        return this.cardService.create(createCardDto);
    }

    @Get()
    findAll() {
        return this.cardService.findAll();
    }

}
