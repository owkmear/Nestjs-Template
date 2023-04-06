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
      return "Ошибка поиска одной записи";
    }
  }

  async update(id: string, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  async remove(id: string) {
    const result = await this.articleModel.deleteOne({ _id: { $eq: id } });
    return result.deletedCount === 1
      ? "Статья удалена успешно"
      : "Статья для удаления не найдена";
  }

  async fill() {
    try {
      const deleteResult = await this.articleModel.deleteMany({});
      console.log(`Удалено ${deleteResult.deletedCount} статей`);
      return await this.articleModel.insertMany([
        {
          id: "f080e5be-7625-41e5-801e-4bba59046c8d",
          title: "Sandwich trading bots lose bread and butter in $25M exploit",
          body: "The CertiK team told Cointelegraph that this is one of the biggest exploits that they’ve seen on MEV bots since September 2022.",
          author: "EZRA REGUERRA",
          created: 1680519922745,
        },
        {
          id: "8ba6a65f-24f3-4491-9457-64f23b3d9daf",
          title:
            "Italian regulator draws criticism for blocking AI chatbot ChatGPT",
          body: "ChatGPT’s temporary ban in Italy over privacy concerns draws criticism from figures in the tech industry and the country, including expert Ron Moscona and Deputy PM Matteo Salvini.",
          author: "AMAKA NWAOKOCHA",
          created: 1680520067129,
        },
        {
          id: "7136613b-383a-49c2-98d0-624146f521aa",
          title:
            "An ambitious project opens the doors to the metaverse in the heart of Dubai",
          body: "The metaverse has the potential to boost business success when engaging with customers.",
          author: "HRISTINA YORDANOVA",
          created: 1680520178721,
        },
      ]);
    } catch (error) {
      console.log(error);
      return "Ошибка вставки статей в БД";
    }
  }
}
