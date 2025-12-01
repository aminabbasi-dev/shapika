import { IProduct } from "@/types/product";
export default interface IProductCarouselProps {
  categoryTitle: string;
  products: IProduct[];
  categoryLink: string;
  color: string;
}
