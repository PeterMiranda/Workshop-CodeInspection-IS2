import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class LessonsService {
    //readonly provisional
    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        return this.prisma.lesson.findMany();
    }   
}
