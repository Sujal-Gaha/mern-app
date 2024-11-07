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
  LoginSchema,
  TErrorResponse,
  TLoginUser,
  TLoginUserOutput,
} from "@/types";
import { ErrorText } from "@/components/error";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/data";
import { ToastError, ToastSuccess } from "@/components/toast";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [error, setError] = useState("");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TLoginUser>({
    resolver: zodResolver(LoginSchema),
  });
  useEffect(() => {
    const { unsubscribe } = watch(() => {
      setError("");
    });
    return () => unsubscribe();
  }, [watch]);

  const loginUserMtn = useMutation<
    TLoginUserOutput,
    TErrorResponse,
    TLoginUser
  >({
    mutationFn: loginUser,
    onSuccess: (data) => {
      ToastSuccess({
        title: "Log In Successfull",
        description: data.message,
      });
      return router.push("/");
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const { registerPath } = getAppsPath();

  const loginUserHandler: SubmitHandler<TLoginUser> = async (data) => {
    try {
      await loginUserMtn.mutateAsync(data);
    } catch (error) {
      console.log("Error ", error);
      ToastError({
        title: "Login Failed",
        description: "Something Went Wrong",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="mb-8">
        <AppLogo mode="dark" />
      </div>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(loginUserHandler)}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="text"
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
                  {...register("password")}
                />
                {errors.password?.message ? (
                  <ErrorText error={errors.password.message} />
                ) : error.length ? (
                  <ErrorText error={error} />
                ) : null}
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={loginUserMtn.isPending}
              >
                Log in
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="flex justify-between w-full text-sm">
            <a href="#" className="text-primary hover:underline">
              Forgot password?
            </a>
            <a href={registerPath} className="text-primary hover:underline">
              Sign up
            </a>
          </div>
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" className="w-full">
              <FiGithub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline" className="w-full">
              <LuFacebook className="mr-2 h-4 w-4" />
              Facebook
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
