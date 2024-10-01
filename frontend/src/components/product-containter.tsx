import { Button } from "./ui/button";
import { Heart } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6 space-y-4">
        <div className="aspect-square border shadow border-gray-100 rounded-md relative">
          <Heart className="absolute right-2 top-2 cursor-pointer" />
        </div>
        <h3 className="text-lg font-bold">Product 1</h3>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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

const ProductContainer = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => {
            return <ProductCard key={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export const useProductComponents = () => {
  return {
    ProductContainerComponent: <ProductContainer />,
    ProductCardComponent: <ProductCard />,
  };
};
