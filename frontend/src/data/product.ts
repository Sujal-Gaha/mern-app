export const getAllProductsWithDiscount = async () => {
  const res = await fetch(
    "http://localhost:4000/api/v1/product/getProductsWithDiscount",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data;
};
