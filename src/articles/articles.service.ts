import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { CreateArticleDto } from "./dto/create-article.dto";
import { Article } from "./interfaces/article.interface";

@Injectable()
export class ArticlesService {
  constructor(
    @Inject("ARTICLE_MODEL") private readonly articleModel: Model<Article>
  ) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const createdArticle = this.articleModel.create(createArticleDto);
    return createdArticle;
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }
}
