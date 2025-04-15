import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRootRote() {
    return 'hi there';
  }
}
