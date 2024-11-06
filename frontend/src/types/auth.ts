import { z } from "zod";
import { TUserSchema } from "../../../backend/src/models/user.model";

export const RegisterSchema = z.object({
  username: z
    .string()
    .max(25, "Username must not exceed 25 characters")
    .min(8, "Username must contain atleast 8 characters"),
  email: z.string().min(1).email("Enter a valid email"),
  password: z.string().max(30).min(8),
});

export type TRegisterUser = z.infer<typeof RegisterSchema>;

export type TRegisterUserOutput = {
  status: number;
  data: TUserSchema;
  success: boolean;
  message: string;
};

export * from "../../../backend/src/types/TErrorResponse";
