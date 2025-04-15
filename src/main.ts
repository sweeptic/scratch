// import { Controller, Module, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// @Controller()
// class AppController {
//   @Get()
//   getRootRote() {
//     return 'hi there';
//   }
// }

// @Module({
//   controllers: [AppController],
// })
// class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
