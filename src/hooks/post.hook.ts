import {
  createPostIntoDB,
  getMyAllPost,
  getPost,
  updateVote,
} from "@/services/PostService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (userData) => await createPostIntoDB(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["MY_POSTS"] });
      toast.success("Post created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
export const useVoteUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["VOTE_UPDATE"],
    mutationFn: async (voteData) => await updateVote(voteData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["POST", "MY_POSTS"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetMyAllPosts = (email: string) => {
  return useQuery({
    queryKey: ["MY_POSTS"],
    queryFn: async () => await getMyAllPost(email),
  });
};
export const useGetPost = (userId: string) => {
  return useQuery({
    queryKey: ["POST"],
    queryFn: async () => await getPost(userId),
  });
};
