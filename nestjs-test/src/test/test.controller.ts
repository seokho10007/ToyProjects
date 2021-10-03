import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Test } from './test.model';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getList(): Promise<Test[]> {
    return this.testService.getList();
  }
  @Get(':test_id')
  findTestId(@Param('test_id') test_id: string) {
    return this.testService.findTestId(test_id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  addTest(@Body() body) {
    console.log(body);
    return this.testService.addTest(body);
  }
}
