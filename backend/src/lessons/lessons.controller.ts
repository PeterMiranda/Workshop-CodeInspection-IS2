import { Controller, Get } from '@nestjs/common';
import { LessonsService } from './lessons.service';

@Controller('lessons')
export class LessonsController {
    //readonly provisional
    constructor(private readonly lessonsService: LessonsService) {}

    @Get()
    async getLessons() {
        return this.lessonsService.findAll();
    }
}
