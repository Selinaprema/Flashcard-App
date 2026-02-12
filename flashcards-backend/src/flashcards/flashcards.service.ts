import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FlashcardsService {
  constructor(private prisma: PrismaService) {}

  async createFlashcard(question: string, answer: string, topicId: string) {
    return this.prisma.flashcard.create({
      data: {
        question,
        answer,
        topicId,
      },
    });
  }

  async getFlashcardsByTopic(topicId: string) {
    return this.prisma.flashcard.findMany({
      where: { topicId },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
