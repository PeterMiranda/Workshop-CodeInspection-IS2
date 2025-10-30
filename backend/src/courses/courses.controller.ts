import { Controller, Get } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {

    //readonly provisional
    constructor(private  readonly coursesService: CoursesService) {}

    @Get()
    async getCourses() {
        return this.coursesService.findAll();
    }
    
}
