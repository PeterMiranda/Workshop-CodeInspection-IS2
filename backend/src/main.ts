import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

await (await NestFactory.create(AppModule)).listen(process.env.PORT ?? 3000);
