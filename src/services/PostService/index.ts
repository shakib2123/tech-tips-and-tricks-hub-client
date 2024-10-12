"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const getMyAllPost = async (email: string) => {
  const res = await axiosInstance.get(`/posts/${email}`);
  return res.data;
};

export const createPostIntoDB = async (userData: Record<string, unknown>) => {
  const res = await axiosInstance.post(`/posts`, userData);
  return res.data;
};
