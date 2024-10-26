"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HomePage } from "@/pages/home";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex-1">
        <HomePage />
      </main>
    </QueryClientProvider>
  );
}
