// A temporary in-memory store (remove later and use DB)
let products: any[] = [];

export const metadata = {
  title: "Add Product",
};

// ------------ SERVER ACTION ------------
async function addProduct(formData: FormData) {
  "use server";

  const product = {
    id: Date.now().toString(),
    title: formData.get("title")?.toString() || "",
    description: formData.get("description")?.toString() || "",
    price: Number(formData.get("price")),
    stock: Number(formData.get("stock")),
    categoryId: formData.get("categoryId")?.toString() || "",
    images:
      formData
        .get("images")
        ?.toString()
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean) || [],
  };

  products.push(product);

  console.log("PRODUCT SAVED:", product);
}

// ------------ PAGE COMPONENT ------------
export default function NewProductPage() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-6">Add Product</h1>

      <form
        action={addProduct}
        className="space-y-6 bg-white p-6 rounded-xl border shadow-sm"
      >
        {/* Title */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Title</label>
          <input
            name="title"
            required
            className="w-full border rounded-md px-3 py-2 text-sm"
            placeholder="Product title"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Description</label>
          <textarea
            name="description"
            className="w-full border rounded-md px-3 py-2 text-sm"
            placeholder="Product description"
          />
        </div>

        {/* Price */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Price</label>
          <input
            name="price"
            type="number"
            min="0"
            required
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>

        {/* Stock */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Stock</label>
          <input
            name="stock"
            type="number"
            min="0"
            required
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Category</label>
          <input
            name="categoryId"
            required
            className="w-full border rounded-md px-3 py-2 text-sm"
            placeholder="category_123"
          />
        </div>

        {/* Images */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Images (comma separated)
          </label>
          <input
            name="images"
            className="w-full border rounded-md px-3 py-2 text-sm"
            placeholder="img1.jpg, img2.jpg"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md text-sm"
        >
          Add Product
        </button>
      </form>

      {/* Debug: show added products */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Saved Products (Memory)</h2>
        <pre className="bg-gray-100 p-4 rounded-md text-sm">
          {JSON.stringify(products, null, 2)}
        </pre>
      </div>
    </div>
  );
}
