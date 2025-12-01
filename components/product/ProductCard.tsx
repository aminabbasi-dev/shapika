"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/stores/cart";
import { Minus, Plus } from "lucide-react";
import { IProduct } from "../../types/product";
import { useTheme } from "next-themes";

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { cartItems, addItem, removeItem } = useCart();
  const cartItem = cartItems.find((i) => i.id === product.id);
  const quantity = cartItem?.quantity || 0;
  const { theme } = useTheme();
  return (
    <div
      className={`border rounded mb-2 bg-[hsl(var(--product-card))]  p-3 w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] text-center shadow-md hover:shadow-lg transition-shadow flex flex-col items-center`}
    >
      {/* عکس محصول */}
      <div className="relative w-full aspect-square mb-2 bg-gray-100 rounded-md overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* نام محصول */}
      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-medium line-clamp-1 mb-0.5">
        {product.name}
      </h3>

      {/* قیمت محصول */}
      <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-amber-600 mb-0.5">
        {product.price.toLocaleString()} تومان
      </p>

      {/* دکمه‌ها و Badge */}
      <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 mb-1">
        {/* کاهش */}
        <Button
          size="icon"
          variant="outline"
          className={`h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full ${
            quantity > 0
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => removeItem(product.id)}
          disabled={quantity === 0}
        >
          <Minus className="h-3 sm:h-4 md:h-4 w-3 sm:w-4 md:w-4" />
        </Button>

        {/* تعداد */}
        <Badge
          variant={quantity > 0 ? "default" : "secondary"}
          className={`min-w-6 sm:min-w-8 md:min-w-10 h-7 sm:h-8 md:h-9 px-1 sm:px-2 md:px-3 flex items-center justify-center text-xs sm:text-sm md:text-sm lg:text-base font-semibold transition-all ${
            quantity > 0
              ? "bg-amber-500 text-white hover:bg-amber-600"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {quantity}
        </Badge>

        {/* افزایش */}
        <Button
          size="icon"
          className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all shadow-sm"
          onClick={() => addItem(product)}
        >
          <Plus className="h-3 sm:h-4 md:h-4 w-3 sm:w-4 md:w-4" />
        </Button>
      </div>
    </div>
  );
}
