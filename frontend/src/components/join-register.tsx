import { getAppsPath } from "@/lib/config";
import { Button } from "./ui/button";

export const JoinRegister = () => {
  const { registerPath } = getAppsPath();
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-light dark:bg-dark flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-dark">
              Start Shopping Today!
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
              Join thousands of satisfied customers and experience the Bazaar
              Hub difference.
            </p>
          </div>
          <Button className="bg-white text-blue-600 hover:bg-blue-50">
            <a href={registerPath}>Create an Account</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
