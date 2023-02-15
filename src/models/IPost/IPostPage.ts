import { IPostCard } from "./IPostCard";

export interface IPostPage extends IPostCard {
  id: number;
  createdAt: string;
}
