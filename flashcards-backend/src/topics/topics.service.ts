import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TopicsService {
  constructor(private prisma: PrismaService) {}


async createTopic(name: string, userId: string) {
  return this.prisma.topic.create({
    data: {
      name,
      user: {
        connect: { id: userId },
      },
    },
  });
}

async getAllTopics(userId: string) {
  return this.prisma.topic.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
}
}
