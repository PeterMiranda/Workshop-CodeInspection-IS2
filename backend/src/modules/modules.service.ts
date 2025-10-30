import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ModulesService {   
    //readonly provisional
    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        return this.prisma.module.findMany();
    }
}
