import { CreditCard, RotateCcw, Truck } from "lucide-react";

export const Banner = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-light dark:bg-dark flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
          Why Choose Bazaar Hub?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-2">
            <Truck className="h-8 w-8 text-blue-500" />
            <h3 className="text-xl font-bold">Fast Delivery</h3>
            <p className="text-sm text-gray-500">
              Get your products delivered quickly and efficiently.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <CreditCard className="h-8 w-8 text-blue-500" />
            <h3 className="text-xl font-bold">Secure Payments</h3>
            <p className="text-sm text-gray-500">
              Shop with confidence using our secure payment options.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <RotateCcw className="h-8 w-8 text-blue-500" />
            <h3 className="text-xl font-bold">Easy Returns</h3>
            <p className="text-sm text-gray-500">
              Not satisfied? Return your items hassle-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
