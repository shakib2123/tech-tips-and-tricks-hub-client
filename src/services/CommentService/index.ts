"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const createCommentIntoDB = async (
  commentData: Record<string, unknown>
) => {
  const res = await axiosInstance.post(`/comments`, commentData);
  return res.data;
};
