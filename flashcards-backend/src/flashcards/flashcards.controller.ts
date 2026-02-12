import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('flashcards')
export class FlashcardsController {
  constructor(private flashcardsService: FlashcardsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body('question') question: string,
    @Body('answer') answer: string,
    @Body('topicId') topicId: string,
    @Req() req: any,
  ) {
    return this.flashcardsService.createFlashcard(
      question,
      answer,
      topicId,
      req.user.userId,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getByTopic(
    @Query('topicId') topicId: string,
    @Req() req: any,
  ) {
    return this.flashcardsService.getFlashcardsByTopic(
      topicId,
      req.user.userId,
    );
  }
}
