import { Test, TestingModule } from "@nestjs/testing";
import { ArticlesService } from "./articles.service";
import { Article } from "./interfaces/article.interface";
import { Model } from "mongoose";

const mockArticle = {
  id: "Id #1",
  title: "Title #1",
  body: "Body #1",
  author: "Author #1",
  created: 1680206508792,
};

const articlesArray = [
  {
    id: "Id #1",
    title: "Title #1",
    body: "Body #1",
    author: "Author #1",
    created: 1680206508792,
  },
  {
    id: "Id #2",
    title: "Title #2",
    body: "Body #2",
    author: "Author #2",
    created: 1680206542008,
  },
];

describe("ArticleService", () => {
  let service: ArticlesService;
  let model: Model<Article>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticlesService,
        {
          provide: "ARTICLE_MODEL",
          useValue: {
            new: jest.fn().mockResolvedValue(mockArticle),
            constructor: jest.fn().mockResolvedValue(mockArticle),
            find: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get(ArticlesService);
    model = module.get<Model<Article>>("ARTICLE_MODEL");
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should return all articles", async () => {
    jest.spyOn(model, "find").mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(articlesArray),
    } as any);
    const articles = await service.findAll();
    expect(articles).toEqual(articlesArray);
  });

  it("should insert a new article", async () => {
    jest.spyOn(model, "create").mockImplementationOnce(() =>
      Promise.resolve({
        id: "Id #1",
        title: "Title #1",
        body: "Body #1",
        author: "Author #1",
        created: 1680206508792,
      })
    );
    const newArticle = await service.create({
      id: "Id #1",
      title: "Title #1",
      body: "Body #1",
      author: "Author #1",
      created: 1680206508792,
    });
    expect(newArticle).toEqual(mockArticle);
  });
});
