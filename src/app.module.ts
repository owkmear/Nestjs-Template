import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NewsController } from './news.controller';
import { AppService } from './app.service';
import { NewsService } from './news.service';

@Module({
  imports: [],
  controllers: [AppController, NewsController],
  providers: [AppService, NewsService],
})
export class AppModule {}
