import { TProductSchema } from "../../models/product.model";

export type TGetAllProducts = {
  status: 200;
  data: TProductSchema[];
  success: true;
  message: string;
};

export type TGetProductByProductId = {
  status: 200;
  data: TProductSchema;
  success: true;
  message: string;
};
