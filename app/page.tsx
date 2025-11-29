import ProductCarousel from "../components/product/ProductCarousel";
import { IProduct } from "../types/product";
import { ICategory } from "../types/category";

export default async function Home() {
  const resCategories = await fetch("http://localhost:5001/categories", {
    next: { revalidate: 60 },
  });

  const resProducts = await fetch("http://localhost:5001/products", {
    next: { revalidate: 60 },
  });

  const categories: ICategory[] = await resCategories.json();
  const products: IProduct[] = await resProducts.json();

  return (
    <div className="container">
      {categories.map((cat) => {
        const filteredProducts = products.filter((p) => p.category === cat.id);

        return (
          <div key={cat.id}>
            {filteredProducts.length === 0 ? (
              <div>
                {" "}
                <h2>{cat.name}</h2>
                <p style={{ color: "#777" }}>محصولی در این دسته موجود نیست.</p>
              </div>
            ) : (
              <ProductCarousel
                categoryTitle={cat.name}
                categoryLink={cat.slug}
                products={filteredProducts}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
