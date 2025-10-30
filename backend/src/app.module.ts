import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from '../prisma/prisma.module';
import { CoursesModule } from './courses/courses.module';
import { ModulesModule } from './modules/modules.module';
import { LessonsModule } from './lessons/lessons.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';


@Module({
  imports: [UsersModule, PrismaModule, CoursesModule, ModulesModule, LessonsModule, EnrollmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
