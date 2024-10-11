"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const getCurrentUserFromDB = async () => {
  const res = await axiosInstance.get(`/users/user-data`);
  return res.data;
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
