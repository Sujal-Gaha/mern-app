import { z } from "zod";
import { TUserSchema } from "../../../backend/src/models/user.model";

export type TUserOutput = {
  status: number;
  data: TUserSchema;
  success: boolean;
  message: string;
};

export const RegisterSchema = z.object({
  username: z
    .string()
    .max(25, "Username must not exceed 25 characters")
    .min(8, "Username must contain atleast 8 characters"),
  email: z.string().min(1).email("Enter a valid email"),
  password: z
    .string()
    .max(30, "Invalid Credential")
    .min(8, "Invalid Credential"),
});

export type TRegisterUser = z.infer<typeof RegisterSchema>;

export type TRegisterUserOutput = TUserOutput;

export const LoginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z
    .string()
    .max(30, "Invalid Credential")
    .min(8, "Invalid Credential"),
});

export type TLoginUser = z.infer<typeof LoginSchema>;

export type TLoginUserOutput = TUserOutput;

export * from "../../../backend/src/types/TErrorResponse";
