export const getAppsPath = () => {
  return {
    loginPath: "/login",
    registerPath: "/register",
    forgotPasswordPath: "/forgot-password",
  } as const;
};
