import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { CreateArticleDto } from "./dto/create-article.dto";
import { UpdateArticleDto } from "./dto/update-article.dto";
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

  async findOne(id: string) {
    try {
      return await this.articleModel.findOne({ _id: { $eq: id } });
    } catch (error) {
      console.log(error);
      return 'Ошибка поиска одной записи';
    }
  }

  async update(id: string, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  async remove(id: string) {
    const result = await this.articleModel.deleteOne({ _id: { $eq: id } });
    return result.deletedCount === 1 ? 'Статья удалена успешно' : 'Статья для удаления не найдена';
  }
}
