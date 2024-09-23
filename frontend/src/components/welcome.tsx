import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

export const WelcomeComponent = () => {
  return (
    <section className="flex items-center justify-center py-40 bg-[#eff6ff]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Welcome to Bazaar Hub
          </h1>
          <p className="text-gray-500 md:text-xl">
            Your one-stop shop for all things amazing. Discover, shop, and
            enjoy!
          </p>
        </div>
        <div className="flex w-full justify-center">
          <form className="flex space-x-2 max-w-sm w-full">
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
    </section>
  );
};
