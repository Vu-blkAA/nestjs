import { Controller, Get, Param, Post, Query, Redirect } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('')
  getHello(@Param() params: { id: string }) {
    const { id } = params;
    return 'How can i love you? ' + id;
  }

  @Get('abcd/*')
  findAll() {
    return 'This action returns all cats';
  }

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
}
