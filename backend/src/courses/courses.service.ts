import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CoursesService {
    //readonly provisional
    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        return this.prisma.course.findMany();
    }

    async findById(id: number) {
        return this.prisma.course.findUnique({
            where: { id },
        });
    }
}
