import { Box } from "lucide-react";

const Products = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
      </div>
      <div className="grid gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Product management coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Products;