import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

export const WelcomeComponent = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-light dark:bg-dark flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none dark:text-white">
              Welcome to Bazaar Hub
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Your one-stop shop for all things amazing. Discover, shop, and
              enjoy!
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="flex-1 bg-white"
                placeholder="Search for products..."
                type="search"
              />
              <Button type="submit">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
