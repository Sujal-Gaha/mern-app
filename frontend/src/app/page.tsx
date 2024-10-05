"use client";

import { WelcomeComponent } from "@/components/welcome";
import { Banner } from "@/components/banner";
import { JoinRegister } from "@/components/join-register";
import { ProductContainer } from "@/components/product-containter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex-1">
        <WelcomeComponent />
        <ProductContainer />
        <Banner />
        <JoinRegister />
      </main>
    </QueryClientProvider>
  );
}
