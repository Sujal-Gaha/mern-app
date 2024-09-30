import { Button } from "./ui/button";

export const ProductContainer = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => {
            return (
              <div
                key={item}
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
              >
                <div className="p-6 space-y-4">
                  <div className="aspect-square bg-gray-100 rounded-md"></div>
                  <h3 className="text-lg font-bold">Product {item}</h3>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const useProductComponents = () => {
  return {
    ProductContainerComponent: <ProductContainer />,
  };
};
