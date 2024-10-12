import { createFollow, createUnfollow } from "@/services/Follow";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useCreateFollow = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_FOLLOW"],
    mutationFn: async (followData) => await createFollow(followData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["CURRENT_USER"] });
      toast.success("Following successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useCreateUnfollow = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_UNFOLLOW"],
    mutationFn: async (UnfollowData) => await createUnfollow(UnfollowData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["CURRENT_USER"] });
      toast.success("Unfollowing successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
