import { IImage } from "../../models/IImage";

export interface ISlider {
  id: number;
  title: string;
  content: string;
  columns: string;
  image: IImage | null;
}

export interface ISliders {
  slider: [ISlider];
}

export interface IBanners {
  pinned_links: [IBanner];
}

export interface IBanner {
  id: number;
  title: string;
  image: IImage | null;
  url: string;
}

const Banner = (params: IBanner) => (
  <a href={params.url} className="hover:animate-pulse cursor-pointer">
    <img
      src={String(process.env.REACT_APP_BASEURL! + params?.image?.url)}
      className="w-full"
    />
  </a>
);

export default Banner;
