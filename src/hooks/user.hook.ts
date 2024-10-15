import {
  deleteUser,
  followingActivity,
  getCurrentUserFromDB,
  getUsersFromDB,
  updateUserInfo,
} from "@/services/UserService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useGetUsers = ({ role }: { role?: string }) => {
  return useQuery({
    queryKey: ["GET_USERS"],
    queryFn: async () => await getUsersFromDB({ role }),
  });
};
export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ["CURRENT_USER"],
    queryFn: async () => await getCurrentUserFromDB(),
  });
};
export const useFollowingActivity = ({
  userEmail,
  selectedTab,
}: {
  userEmail: string | undefined;
  selectedTab: string;
}) => {
  return useQuery({
    queryKey: ["FOLLOWING_ACTIVITY"],
    queryFn: async () => await followingActivity({ userEmail, selectedTab }),
  });
};

export const useUpdateUserInfo = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_UPDATE"],
    mutationFn: async ({ email, updatedData }) =>
      await updateUserInfo(email, updatedData),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["CURRENT_USER", "GET_USERS"],
      });
      toast.success("User information updated successfully!.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, string>({
    mutationKey: ["USER_DELETE"],
    mutationFn: async (userId: string) => await deleteUser(userId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["CURRENT_USER", "GET_USERS"],
      });
      toast.success("User deleted successfully!.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
