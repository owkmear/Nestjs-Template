export class CreateArticleDto {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly author: string;
  readonly created: number;
}
