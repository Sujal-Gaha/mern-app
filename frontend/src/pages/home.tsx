import { WelcomeComponent } from "@/components/welcome";
import { Banner } from "@/components/banner";
import { JoinRegister } from "@/components/join-register";
import { ProductContainer } from "@/components/product-containter";
import { useQuery } from "@tanstack/react-query";
import { TGetAllProducts } from "../../../backend/src/types/product/TProductResponse";
import { getAllProductsWithDiscount } from "@/data";

export const HomePage = () => {
  const { data: productData, isLoading } = useQuery<TGetAllProducts>({
    queryKey: ["getAllProductsWithDiscount"],
    queryFn: getAllProductsWithDiscount,
  });

  return (
    <>
      <WelcomeComponent />
      <ProductContainer productData={productData} isLoading={isLoading} />
      <Banner />
      <JoinRegister />
    </>
  );
};
