import { WelcomeComponent } from "@/components/welcome";
import { useProductComponents } from "@/components/product-containter";
import { Banner } from "@/components/banner";

export default function Home() {
  const { ProductContainerComponent } = useProductComponents();
  return (
    <main>
      <WelcomeComponent />
      {ProductContainerComponent}
      <Banner />
    </main>
  );
}
