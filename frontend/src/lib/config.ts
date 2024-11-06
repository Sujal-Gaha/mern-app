export const getAppsPath = () => {
  return {
    homePath: "/",
    categoryPath: "/category",
    cartPath: "/cart",
    aboutPath: "/about",
    loginPath: "/auth/login",
    registerPath: "/auth/register",
    forgotPasswordPath: "/forgot-password",
  } as const;
};
