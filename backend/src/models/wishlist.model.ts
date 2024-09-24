import mongoose, { InferSchemaType } from "mongoose";

const WishlistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export type TWishlistSchema = InferSchemaType<typeof WishlistSchema>;

export const WishlistModel = mongoose.model("Wishlist", WishlistSchema);
