// components/ProductCard.tsx
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/stores/cart";
import { Minus, Plus } from "lucide-react";
import { IProduct } from "../../types/product";

export default function ProductCard({ product }: { product: IProduct }) {
  const { cartItems, addItem, removeItem } = useCart();

  // پیدا کردن محصول در سبد
  const cartItem = cartItems.find((i) => i.id === product.id);
  const quantity = cartItem?.quantity || 0;

  return (
    <div className="border rounded-2xl p-2 w-64 text-center shadow-md hover:shadow-md transition-shadow">
      {/* عکس محصول — پویا */}
      <div className="relative aspect-square mb-3 h-40 bg-gray-100 rounded-md overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          height={200}
          width={200}
          className="object-cover"
          unoptimized
        />
      </div>

      {/* نام محصول */}
      <h3 className="text-sm font-medium line-clamp-2 mb-1">{product.name}</h3>

      {/* قیمت */}
      <p className="text-md font-bold text-amber-600 mb-1">
        {product.price.toLocaleString()} تومان
      </p>

      {/* دکمه‌ها + Badge */}
      <div className="flex items-center justify-center gap-3">
        {/* کاهش */}
        <Button
          size="icon"
          variant="outline"
          className={`h-9 w-9 rounded-full
          
                      ${
                        quantity > 0
                          ? "bg-red-500 text-gray-600 hover:bg-red-600"
                          : "bg-gray-200 text-gray-600"
                      }`}
          onClick={() => removeItem(product.id)}
          disabled={quantity === 0}
        >
          <Minus className="h-4 w-4" />
        </Button>

        {/* تعداد */}
        <Badge
          variant={quantity > 0 ? "default" : "secondary"}
          className={`
            min-w-10 h-9 px-3 flex items-center justify-center text-sm font-semibold transition-all
            ${
              quantity > 0
                ? "bg-amber-500 text-white hover:bg-amber-600"
                : "bg-gray-200 text-gray-600"
            }
          `}
        >
          {quantity}
        </Badge>

        {/* افزایش */}
        <Button
          size="icon"
          className="h-9 w-9 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all shadow-sm"
          onClick={() => addItem(product)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
