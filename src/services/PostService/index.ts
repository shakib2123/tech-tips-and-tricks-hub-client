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
export const getAllPosts = async (query: string) => {
  const res = await axiosInstance.get(`/posts${query}`);
  return res.data;
};

export const updateVote = async (voteData: Record<string, unknown>) => {
  const res = await axiosInstance.put(`/posts/vote-update`, voteData);
  return res.data;
};

export const createPostIntoDB = async (postData: Record<string, unknown>) => {
  const res = await axiosInstance.post(`/posts`, postData);
  return res.data;
};
export const updatePostIntoDB = async (updateData: Record<string, unknown>) => {
  const res = await axiosInstance.patch(
    `/posts/${updateData.postId}`,
    updateData.postData
  );
  return res.data;
};
export const deletePost = async (postId: string) => {
  const res = await axiosInstance.delete(`/posts/${postId}`);
  return res.data;
};
