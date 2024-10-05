import { Button } from "./ui/button";
import { Heart } from "lucide-react";

export const ProductCard = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm dark:bg-red-300 dark:border-gray-600">
      <div className="p-6 space-y-4">
        <div className="relative aspect-square bg-gray-100 dark:bg-white rounded-md">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-8 w-8 rounded-full"
            aria-label="Add to wishlist"
          >
            <Heart className="h-6 w-6 dark:text-black" />
          </Button>
        </div>
        <h3 className="text-lg font-bold">Product 1</h3>
        <p className="text-sm text-gray-500 dark:text-white">
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

export const ProductContainer = ({
  container_title,
  data,
}: {
  container_title: string;
  data: string[];
}) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-dark flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
          {container_title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item) => {
            return <ProductCard key={item} />;
          })}
        </div>
      </div>
    </section>
  );
};
