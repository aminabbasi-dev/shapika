import db from "../../db.json"; // db.products و db.categories

import ProductCarousel from "../../components/product/ProductCarousel";
import { IProduct } from "../../types/product";
import { ICategory } from "../../types/category";

export default function Home() {
  const categories: ICategory[] = db.categories;
  const products: IProduct[] = db.products;

  return (
    <div className=" px-2">
      {categories.map((cat) => {
        const filteredProducts = products.filter((p) => p.category === cat.id);

        return (
          <div key={cat.id}>
            {filteredProducts.length === 0 ? (
              <>
                <h2>{cat.name}</h2>
                <p style={{ color: "#777" }}>محصولی در این دسته موجود نیست.</p>
              </>
            ) : (
              <ProductCarousel
                categoryTitle={cat.name}
                categoryLink={cat.slug}
                products={filteredProducts}
                color={cat.color}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
