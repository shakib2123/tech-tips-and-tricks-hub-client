"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const getMyAllPost = async (email: string) => {
  const res = await axiosInstance.get(`/posts/my-posts/${email}`);
  return res.data;
};
export const getPost = async (postId: string) => {
  const res = await axiosInstance.get(`/posts/${postId}`);
  return res.data;
};

export const updateVote = async (voteData: Record<string, unknown>) => {
  const res = await axiosInstance.put(`/posts/vote-update`, voteData);
  return res.data;
};

export const createPostIntoDB = async (userData: Record<string, unknown>) => {
  const res = await axiosInstance.post(`/posts`, userData);
  return res.data;
};
