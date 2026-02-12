import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';

@Controller('flashcards')
export class FlashcardsController {
  constructor(private flashcardsService: FlashcardsService) {}

  @Post()
  async create(
    @Body('question') question: string,
    @Body('answer') answer: string,
    @Body('topicId') topicId: string,
  ) {
    return this.flashcardsService.createFlashcard(question, answer, topicId);
  }

  @Get()
  async getByTopic(@Query('topicId') topicId: string) {
    return this.flashcardsService.getFlashcardsByTopic(topicId);
  }
}
