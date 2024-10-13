"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const createCommentIntoDB = async (
  commentData: Record<string, unknown>
) => {
  const res = await axiosInstance.post(`/comments`, commentData);
  return res.data;
};
export const getCommentsFromDB = async () => {
  const res = await axiosInstance.get(`/comments`);
  return res.data;
};
export const deleteCommentsFromDB = async (id: string) => {
  const res = await axiosInstance.delete(`/comments/${id}`);
  return res.data;
};
