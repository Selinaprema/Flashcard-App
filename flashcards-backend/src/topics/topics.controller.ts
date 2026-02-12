import { Body, Controller, Get, Post } from '@nestjs/common';
import { TopicsService } from './topics.service';

@Controller('topics')
export class TopicsController {
  constructor(private topicsService: TopicsService) {}

  @Post()
  async create(@Body('name') name: string) {
    return this.topicsService.createTopic(name);
  }

  @Get()
  async findAll() {
    return this.topicsService.getAllTopics();
  }
}
s