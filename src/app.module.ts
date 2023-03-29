import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { AppController } from './app.controller';
import { NewsController } from './news.controller';
import { AppService } from './app.service';
import { NewsService } from './news.service';

@Module({
  imports: [ConfigModule.forRoot({
    load: [configuration]
  })],
  controllers: [AppController, NewsController],
  providers: [AppService, NewsService],
})
export class AppModule {}
