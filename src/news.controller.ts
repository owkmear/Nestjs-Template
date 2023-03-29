import { Controller, Body, Get, Post, Param, Delete } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { NewsService } from './news.service';
import { News } from './interfaces/news.interface';

@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.newsService.delete(id);
  }

  @Post()
  async create(@Body() createCatDto: CreateNewsDto) {
    this.newsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<News[]> {
    return this.newsService.findAll();
  }
}
