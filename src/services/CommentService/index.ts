"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const createCommentIntoDB = async (
  commentData: Record<string, unknown>
) => {
  const res = await axiosInstance.post(`/comments`, commentData);
  return res.data;
};
export const getCommentsFromDB = async (query: Record<string, unknown>) => {
  const res = await axiosInstance.get(
    `/comments?postId=${query.postId}&author=${query.author}`
  );
  return res.data;
};

export const updateCommentIntoDB = async (
  commentData: Record<string, string>
) => {
  const res = await axiosInstance.put(`/comments/${commentData.id}`, {
    comment: commentData.comment,
  });
  return res.data;
};

export const deleteCommentsFromDB = async (id: string) => {
  const res = await axiosInstance.delete(`/comments/${id}`);
  return res.data;
};
