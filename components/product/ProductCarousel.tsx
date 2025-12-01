"use client";

import React from "react";
import { useTheme } from "next-themes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import IProductCarouselProps from "../../types/productCarouselProps";
import Link from "next/link";

const ProductCarousel: React.FC<IProductCarouselProps> = ({
  categoryTitle,
  products,
  categoryLink,
  color,
}) => {
  const { theme } = useTheme();

  return (
    <section
      className={`w-full my-4 rounded-2xl px-2 ${
        theme === "dark" ? color.dark : color.light
      }`}
    >
      <Link
        href={categoryLink}
        className="text-lg sm:text-xl font-bold mb-2 px-4 block text-right"
      >
        {categoryTitle}
      </Link>

      <div className="relative w-full">
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
            <CarouselContent className="gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 2xl:gap-3.5">
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="pl-0"
                  style={{
                    flex: "0 0 auto",
                    width: "auto",
                    minWidth: "200px",
                  }}
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
          )}

          {/* فلش فقط روی لپ‌تاپ */}
          <CarouselPrevious className="hidden md:flex right-2 md:right-4 left-auto h-10 w-10 bg-white dark:bg-gray-700 rounded-full shadow-lg border hover:bg-gray-50 dark:hover:bg-gray-600 items-center justify-center text-gray-800 dark:text-gray-200 transition-colors duration-300" />
          <CarouselNext className="hidden md:flex left-2 md:left-4 right-auto h-10 w-10 bg-white dark:bg-gray-700 rounded-full shadow-lg border hover:bg-gray-50 dark:hover:bg-gray-600 items-center justify-center text-gray-800 dark:text-gray-200 transition-colors duration-300" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductCarousel;
