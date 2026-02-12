import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { TopicsModule } from './topics/topics.module';
import { FlashcardsModule } from './flashcards/flashcards.module';

@Module({
  imports: [
    PrismaModule,
    TopicsModule,      // <-- THIS MUST BE HERE
    FlashcardsModule,
  ],
})
export class AppModule {}
