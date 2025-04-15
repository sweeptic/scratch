import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('/asdf')
  getRootRote() {
    return 'hi there';
  }

  @Get('/bye')
  getByThereRote() {
    return 'bye there';
  }
}
