import { WelcomeComponent } from "@/components/welcome";
import { ProductContainer } from "@/components/product-containter";

export default function Home() {
  return (
    <main>
      <WelcomeComponent />
      <ProductContainer />
    </main>
  );
}
