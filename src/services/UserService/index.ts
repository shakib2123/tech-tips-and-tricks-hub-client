"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const getCurrentUserFromDB = async () => {
  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    throw new Error("No access token found");
  }

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
    console.log(decodedToken.email);

    const res = await axiosInstance.get(`/users/${decodedToken.email}`);

    return res.data;
  }
};

export const updateUserInfo = async (
  email: string,
  updatedData: Record<string, unknown>
) => {
  try {
    const res = await axiosInstance.patch(`/users/${email}`, updatedData);
    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
