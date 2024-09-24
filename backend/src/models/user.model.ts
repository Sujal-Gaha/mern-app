import mongoose, { InferSchemaType } from "mongoose";

const RoleEnum = ["user", "admin"];

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: RoleEnum,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

export type TUserSchema = InferSchemaType<typeof UserSchema>;

export const UserModel = mongoose.model("User", UserSchema);
