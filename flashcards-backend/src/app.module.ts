import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { TopicsModule } from './topics/topics.module';
import { FlashcardsModule } from './flashcards/flashcards.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    TopicsModule,      // <-- THIS MUST BE HERE
    FlashcardsModule, AuthModule,
  ],
})
export class AppModule {}
