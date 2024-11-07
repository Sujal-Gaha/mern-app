import {
  TLoginUser,
  TLoginUserOutput,
  TRegisterUser,
  TRegisterUserOutput,
} from "@/types";

export const registerUser = async (
  body: TRegisterUser
): Promise<TRegisterUserOutput> => {
  const response = await fetch("http://localhost:4000/api/v1/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data: TRegisterUserOutput = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const loginUser = async (
  body: TLoginUser
): Promise<TLoginUserOutput> => {
  const response = await fetch("http://localhost:4000/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data: TLoginUserOutput = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};
