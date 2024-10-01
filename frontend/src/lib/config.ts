export const getAppsPath = () => {
  return {
    homePath: "/",
    categoryPath: "/category",
    cartPath: "/cart",
    aboutPath: "/about",
    loginPath: "/login",
    registerPath: "/register",
    forgotPasswordPath: "/forgot-password",
  } as const;
};
