export const getAppsPath = () => {
  return {
    homePath: "/",
    categoryPath: "/category",
    aboutPath: "/about",
    loginPath: "/login",
    registerPath: "/register",
    forgotPasswordPath: "/forgot-password",
  } as const;
};
