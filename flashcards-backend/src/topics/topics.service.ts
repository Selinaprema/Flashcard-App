import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TopicsService {
  constructor(private prisma: PrismaService) {}

  async createTopic(name: string) {
    return this.prisma.topic.create({
      data: {
        name,
      },
    });
  }

  async getAllTopics() {
    return this.prisma.topic.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
