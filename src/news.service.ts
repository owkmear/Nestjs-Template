import { Injectable } from '@nestjs/common';
import { News } from './interfaces/news.interface';
import { CreateNewsDto } from './dto/create-news.dto';
import { randomInteger } from './utils';
import newsMockData from './mock/news';

@Injectable()
export class NewsService {
  private news: News[] = newsMockData;

  delete(id: string) {
    this.news = this.news.filter((n: News) => n.id !== Number(id));
  }

  create(oneNewsDto: CreateNewsDto) {
    const id = randomInteger(10, 10000);
    const oneNews = { ...oneNewsDto, id } as News;
    this.news.push(oneNews);
  }

  findAll(): News[] {
    return this.news;
  }
}
