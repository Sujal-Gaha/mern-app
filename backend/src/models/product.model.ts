import mongoose, { InferSchemaType } from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 30,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
      maxLength: 100,
      minLength: 10,
      trim: true,
    },
    stock: {
      type: Number,
      required: true,
      min: 1,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    discountRate: Number,
  },
  {
    timestamps: true,
  }
);

export type TProductSchema = InferSchemaType<typeof ProductSchema>;

export const ProductModel = mongoose.model("Product", ProductSchema);
