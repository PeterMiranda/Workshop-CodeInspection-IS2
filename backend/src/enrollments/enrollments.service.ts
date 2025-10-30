import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EnrollmentsService {
    //readonly provisional
    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        return this.prisma.enrollment.findMany();
    }
}
