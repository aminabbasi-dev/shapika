"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import Link from "next/link";
interface ProductCarouselProps {
  categoryTitle: string;
  products: Product[];
  categoryLink: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  categoryTitle,
  products,
  categoryLink,
}) => {
  return (
    <section className="w-full my-3">
      <Link
        href={categoryLink}
        className="text-lg w-fit font-bold mb-1 px-4 text-right block"
      >
        {categoryTitle}
      </Link>

      <div className="relative container max-w-7xl mx-auto px-4">
        <Carousel
          opts={{
            direction: "rtl",
            align: "start",
            loop: false,
            containScroll: "trimSnaps",
          }}
          className="w-full"
        >
          {products && (
            <CarouselContent className="gap-4">
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="pl-0"
                  style={{
                    flex: "0 0 250px",
                    maxWidth: "250px",
                  }}
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
          )}

          <CarouselPrevious className="right-4 left-auto h-10 w-10 bg-white rounded-full shadow-lg border hover:bg-gray-50" />
          <CarouselNext className="left-4 right-auto h-10 w-10 bg-white rounded-full shadow-lg border hover:bg-gray-50" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductCarousel;
