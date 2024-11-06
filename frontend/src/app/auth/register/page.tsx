"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LuFacebook } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { AppLogo } from "@/components/logo";
import { getAppsPath } from "@/lib/config";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  RegisterSchema,
  TErrorResponse,
  TRegisterUser,
  TRegisterUserOutput,
} from "@/types";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorText } from "@/components/error";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/data";
import { ToastError, ToastSuccess } from "@/components/toast";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const registerMtn = useMutation<
    TRegisterUserOutput,
    TErrorResponse,
    TRegisterUser
  >({
    mutationFn: registerUser,
    onSuccess: (data) => {
      ToastSuccess({
        title: "Registration",
        description: data.message,
      });
      router.push("/");
    },
    onError: (error) => {
      ToastError({
        title: "Registration Failed",
        description: error.message,
      });
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TRegisterUser>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      password: "",
    },
  });
  const [password, setPassword] = useState("");

  const passwordsMatch = password === watch("password");

  const registerUserHandler: SubmitHandler<TRegisterUser> = async (data) => {
    try {
      if (passwordsMatch) {
        await registerMtn.mutateAsync(data);
      }
    } catch (error) {
      console.log("Error ", error);
    }
  };

  const { loginPath } = getAppsPath();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="mb-8">
        <AppLogo mode="dark" />
      </div>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Enter your details to register</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(registerUserHandler)}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="text" {...register("username")} />
                {errors.username?.message ? (
                  <ErrorText error={errors.username.message} />
                ) : null}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email")}
                />
                {errors.email?.message ? (
                  <ErrorText error={errors.email.message} />
                ) : null}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register("password")}
                />
                {!passwordsMatch ? (
                  <ErrorText error="Password doesnot match" />
                ) : errors.password?.message ? (
                  <ErrorText error={errors.password.message} />
                ) : null}
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the Terms and Conditions
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={registerMtn.isPending}
              >
                {registerMtn.isPending ? "Registering..." : "Register"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center">
            <a href={loginPath} className="text-primary hover:underline">
              Already have an account? Log in
            </a>
          </div>
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or register with
              </span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" className="w-full">
              <FiGithub className="mr-2 text-base" />
              Github
            </Button>
            <Button variant="outline" className="w-full">
              <LuFacebook className="mr-2 text-base" />
              Facebook
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
