// "use client";
// import ProductCard from "./ProductCard";

// // نوع محصول
// interface IProduct {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
// }

// // 20 محصول واقعی
// const products: IProduct[] = [
//   {
//     id: 1,
//     title: "لپ‌تاپ گیمینگ",
//     price: 45000000,
//     image: "https://via.placeholder.com/300x300?text=Laptop",
//   },
//   {
//     id: 2,
//     title: "گوشی آیفون 15",
//     price: 58000000,
//     image: "https://via.placeholder.com/300x300?text=iPhone",
//   },
//   {
//     id: 3,
//     title: "هدفون بی‌سیم",
//     price: 2500000,
//     image: "https://via.placeholder.com/300x300?text=Headphones",
//   },
//   {
//     id: 4,
//     title: "ساعت هوشمند",
//     price: 8900000,
//     image: "https://via.placeholder.com/300x300?text=Smartwatch",
//   },
//   {
//     id: 5,
//     title: "کفش نایک",
//     price: 3200000,
//     image: "https://via.placeholder.com/300x300?text=Nike",
//   },
//   {
//     id: 6,
//     title: "کوله‌پشتی",
//     price: 1200000,
//     image: "https://via.placeholder.com/300x300?text=Backpack",
//   },
//   {
//     id: 7,
//     title: "دوربین DSLR",
//     price: 28000000,
//     image: "https://via.placeholder.com/300x300?text=Camera",
//   },
//   {
//     id: 8,
//     title: "تلویزیون 55 اینچ",
//     price: 22000000,
//     image: "https://via.placeholder.com/300x300?text=TV",
//   },
//   {
//     id: 9,
//     title: "ماشین ریش‌تراش",
//     price: 1800000,
//     image: "https://via.placeholder.com/300x300?text=Shaver",
//   },
//   {
//     id: 10,
//     title: "موس گیمینگ",
//     price: 950000,
//     image: "https://via.placeholder.com/300x300?text=Mouse",
//   },
//   {
//     id: 11,
//     title: "کیبورد مکانیکی",
//     price: 3500000,
//     image: "https://via.placeholder.com/300x300?text=Keyboard",
//   },
//   {
//     id: 12,
//     title: "مانیتور 27 اینچ",
//     price: 9800000,
//     image: "https://via.placeholder.com/300x300?text=Monitor",
//   },
//   {
//     id: 13,
//     title: "پاوربانک 20000",
//     price: 890000,
//     image: "https://via.placeholder.com/300x300?text=Powerbank",
//   },
//   {
//     id: 14,
//     title: "هندزفری بلوتوث",
//     price: 650000,
//     image: "https://via.placeholder.com/300x300?text=Earbuds",
//   },
//   {
//     id: 15,
//     title: "تبلت سامسونگ",
//     price: 14500000,
//     image: "https://via.placeholder.com/300x300?text=Tablet",
//   },
//   {
//     id: 16,
//     title: "پرینتر لیزری",
//     price: 7200000,
//     image: "https://via.placeholder.com/300x300?text=Printer",
//   },
//   {
//     id: 17,
//     title: "اسپیکر بلوتوث",
//     price: 1900000,
//     image: "https://via.placeholder.com/300x300?text=Speaker",
//   },
//   {
//     id: 18,
//     title: "چراغ مطالعه",
//     price: 420000,
//     image: "https://via.placeholder.com/300x300?text=Lamp",
//   },
//   {
//     id: 19,
//     title: "فلش مموری 64GB",
//     price: 380000,
//     image: "https://via.placeholder.com/300x300?text=USB",
//   },
//   {
//     id: 20,
//     title: "هارد اکسترنال 1TB",
//     price: 3200000,
//     image: "https://via.placeholder.com/300x300?text=HDD",
//   },
// ];
// export default function ProductList() {
//   return (
//     <div className="container mx-auto px-5 py-3 grid justify-items-center">
//       <h2 className=" mb-3 font-semibold">لیست محصولات</h2>
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-9 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";

function ProductList() {
  return <div>ProductList</div>;
}

export default ProductList;
