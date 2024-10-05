import { WelcomeComponent } from "@/components/welcome";
import { Banner } from "@/components/banner";
import { JoinRegister } from "@/components/join-register";
import { ProductContainer } from "@/components/product-containter";

export default function Home() {
  return (
    <main className="flex-1">
      <WelcomeComponent />
      <ProductContainer container_title="Discount Products" data={["data1"]} />
      <Banner />
      <ProductContainer container_title="Featured Products" data={["asdl"]} />
      <JoinRegister />
    </main>
  );
}
