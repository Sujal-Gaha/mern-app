import { useQuery } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { TGetAllProducts } from "../../../backend/src/types/product/TProductResponse";
import { TProductSchema } from "../../../backend/src/models/product.model";

export const ProductCard = ({ product }: { product: TProductSchema }) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm dark:bg-red-300 dark:border-gray-600">
      <div className="p-6 space-y-4">
        <div className="relative aspect-square bg-gray-100 dark:bg-white rounded-md">
          <span className="px-1 py-0.5 rounded-md absolute top-3.5 right-10 bg-red-300 text-xs font-medium">
            -{product.discountRate}%
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-8 w-8 rounded-full"
            aria-label="Add to wishlist"
          >
            <Heart className="h-6 w-6 dark:text-black" />
          </Button>
        </div>
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-sm text-gray-500 dark:text-white">
          {product.description}
        </p>
        <div className="flex flex-col space-y-2">
          <Button className="w-full">Add to Cart</Button>
          <Button className="w-full" variant="outline">
            Purchase Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export const ProductContainer = () => {
  const { data: productData } = useQuery<TGetAllProducts>({
    queryKey: ["getAllProductsWithDiscount"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:4000/api/v1/product/getProductsWithDiscount",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-dark flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
          Discount Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productData?.data.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};
