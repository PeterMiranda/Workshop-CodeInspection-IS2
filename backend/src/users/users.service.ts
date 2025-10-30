import { Injectable } from '@nestjs/common';
// Update the import path if necessary, or create the missing file
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UsersService {
  //readonly provisional
  constructor(private readonly prisma: PrismaService) { }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }
}

