"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const createPostIntoDB = async (userData: Record<string, unknown>) => {
  const res = await axiosInstance.post(`/posts`, userData);
  return res.data;
};
