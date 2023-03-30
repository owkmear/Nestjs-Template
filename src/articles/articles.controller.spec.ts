import { Test, TestingModule } from "@nestjs/testing";
import { ArticlesController } from "./articles.controller";
import { CreateArticleDto } from "./dto/create-article.dto";
import { ArticlesService } from "./articles.service";

describe("ArticlesController", () => {
  let controller: ArticlesController;
  let service: ArticlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: [
        {
          provide: ArticlesService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              {
                id: "Id #1",
                title: "Title #1",
                body: "Body #1",
                author: "Author #1",
                created: 1680206752593,
              },
              {
                id: "Id #2",
                title: "Title #2",
                body: "Body #2",
                author: "Author #2",
                created: 1680206758129,
              },
              {
                id: "Id #3",
                title: "Title #3",
                body: "Body #3",
                author: "Author #3",
                created: 1680206763184,
              },
            ]),
            create: jest
              .fn()
              .mockImplementation((createArticleDto: CreateArticleDto) =>
                Promise.resolve({ _id: "1", ...createArticleDto })
              ),
          },
        },
      ],
    }).compile();

    controller = module.get(ArticlesController);
    service = module.get(ArticlesService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("create()", () => {
    it("should create a new article", async () => {
      const createArticleDto: CreateArticleDto = {
        id: "Id #1",
        title: "Title #1",
        body: "Body #1",
        author: "Author #1",
        created: 1680206752593,
      };

      expect(controller.create(createArticleDto)).resolves.toEqual({
        _id: "1",
        ...createArticleDto,
      });
    });
  });

  describe("findAll()", () => {
    it("should get an array of articles", () => {
      expect(controller.findAll()).resolves.toEqual([
        {
          id: "Id #1",
          title: "Title #1",
          body: "Body #1",
          author: "Author #1",
          created: 1680206752593,
        },
        {
          id: "Id #2",
          title: "Title #2",
          body: "Body #2",
          author: "Author #2",
          created: 1680206758129,
        },
        {
          id: "Id #3",
          title: "Title #3",
          body: "Body #3",
          author: "Author #3",
          created: 1680206763184,
        },
      ]);
    });
  });
});
