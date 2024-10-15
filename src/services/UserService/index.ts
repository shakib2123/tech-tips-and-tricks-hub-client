"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const getUsersFromDB = async ({ role }: { role: string }) => {
  const res = await axiosInstance.get(`/users?role=${role}`);
  return res.data;
};
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
export const deleteUser = async (userId: string) => {
  try {
    const res = await axiosInstance.delete(`/users/${userId}`);
    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const followingActivity = async ({
  userEmail,
  selectedTab,
}: {
  userEmail: string | undefined;
  selectedTab: string;
}) => {
  try {
    const res = await axiosInstance.get(
      `/users/following-activity?email=${userEmail}&tab=${selectedTab}`
    );
    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
