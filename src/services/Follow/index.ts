"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const createFollow = async (followData: Record<string, string>) => {
  try {
    const res = await axiosInstance.post(`/follow/following`, followData);
    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const createUnfollow = async (UnfollowData: Record<string, string>) => {
  try {
    const res = await axiosInstance.post(`/follow/unfollow`, UnfollowData);
    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
