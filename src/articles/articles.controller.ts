import { Controller, Get, Post, Body } from "@nestjs/common";
import { CreateArticleDto } from "./dto/create-article.dto";
import { ArticlesService } from "./articles.service";
import { Article } from "./interfaces/article.interface";

@Controller("articles")
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  async create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  async findAll(): Promise<Article[]> {
    return this.articlesService.findAll();
  }
}
