import { Document } from "mongoose";

export interface Article extends Document {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly author: string;
  readonly created: number;
}
