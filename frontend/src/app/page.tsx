import { WelcomeComponent } from "@/components/welcome";
import { useProductComponents } from "@/components/product-containter";

export default function Home() {
  const { ProductContainerComponent } = useProductComponents();
  return (
    <main>
      <WelcomeComponent />
      {ProductContainerComponent}
    </main>
  );
}
