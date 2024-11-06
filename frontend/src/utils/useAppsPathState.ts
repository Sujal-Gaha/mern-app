"use client";

import { getAppsPath } from "@/lib/config";
import { usePathname } from "next/navigation";

export const useAppsPathState = () => {
  const pathname = usePathname();

  const {
    homePath,
    loginPath,
    aboutPath,
    cartPath,
    categoryPath,
    forgotPasswordPath,
    registerPath,
  } = getAppsPath();

  const isPathHome = pathname === homePath;
  const isPathLogin = pathname === loginPath;
  const isPathAbout = pathname === aboutPath;
  const isPathCart = pathname === cartPath;
  const isPathCategory = pathname === categoryPath;
  const isPathForgotPassword = pathname === forgotPasswordPath;
  const isPathRegister = pathname === registerPath;

  return {
    isPathHome,
    isPathLogin,
    isPathAbout,
    isPathCart,
    isPathCategory,
    isPathForgotPassword,
    isPathRegister,
  } as const;
};
