import { Body, Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('topics')
export class TopicsController {
  constructor(private topicsService: TopicsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body('name') name: string,
    @Req() req: any,
  ) {
    return this.topicsService.createTopic(name, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() req: any) {
    return this.topicsService.getAllTopics(req.user.userId);
  }
}
