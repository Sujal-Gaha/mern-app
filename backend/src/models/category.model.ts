import mongoose, { InferSchemaType } from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export type TCateogorySchema = InferSchemaType<typeof CategorySchema>;

export const CategoryModel = mongoose.model("Category", CategorySchema);
