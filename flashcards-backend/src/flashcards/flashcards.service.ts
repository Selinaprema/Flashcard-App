import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Flashcard } from '@prisma/client';

@Injectable()
export class FlashcardsService {
  constructor(private prisma: PrismaService) {}

  async createFlashcard(
    question: string,
    answer: string,
    topicId: string,
    userId: string,
  ): Promise<Flashcard> {
    return this.prisma.flashcard.create({
      data: {
        question,
        answer,
        topicId,
        userId,
      },
    });
  }

  async getFlashcardsByTopic(
    topicId: string,
    userId: string,
  ): Promise<Flashcard[]> {
    return this.prisma.flashcard.findMany({
      where: {
        topicId,
        userId,
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}