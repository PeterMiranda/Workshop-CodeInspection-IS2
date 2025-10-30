import { Controller, Get } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';

@Controller('enrollments')
export class EnrollmentsController {
    //readonly provisional
    constructor(private readonly enrollmentsService: EnrollmentsService) { }

    @Get()
    async getEnrollments() {
        return this.enrollmentsService.findAll();
    }
}
