import { WelcomeComponent } from "@/components/welcome";
import { useProductComponents } from "@/components/product-containter";
import { Banner } from "@/components/banner";
import { JoinRegister } from "@/components/join-register";

export default function Home() {
  const { ProductContainerComponent } = useProductComponents();
  return (
    <main>
      <WelcomeComponent />
      {ProductContainerComponent}
      <Banner />
      <JoinRegister />
    </main>
  );
}
