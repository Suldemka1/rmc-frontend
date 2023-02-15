import { IImage } from "../IImage";

export interface IPostCard {
  post_card: {
    id: number;
    title: string;
    short_body: string;
    body: string;
    preview_image: IImage;
    images: [IImage];
  };
  publishedAt: string;
}
