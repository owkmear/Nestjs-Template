import { Mongoose } from "mongoose";
import { ArticleSchema } from "./schemas/article.schema";

export const articlesProviders = [
  {
    provide: "ARTICLE_MODEL",
    useFactory: (mongoose: Mongoose) =>
      mongoose.model("Article", ArticleSchema),
    inject: ["DATABASE_CONNECTION"],
  },
];
