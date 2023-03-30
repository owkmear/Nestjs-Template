import * as mongoose from "mongoose";

export const ArticleSchema = new mongoose.Schema({
  id: String,
  title: String,
  body: String,
  author: String,
  created: Number,
});
