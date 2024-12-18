import {
  createPostIntoDB,
  deletePost,
  getAllPosts,
  getMyAllPost,
  getPost,
  updatePostIntoDB,
  updateVote,
} from "@/services/PostService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (postData) => await createPostIntoDB(postData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["MY_POSTS"],
      });
      queryClient.invalidateQueries({
        queryKey: ["ALL_POSTS"],
      });
      queryClient.invalidateQueries({
        queryKey: ["POST"],
      });
      toast.success("Post created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["UPDATE_POST"],
    mutationFn: async (updateData) => await updatePostIntoDB(updateData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["MY_POSTS"],
      });
      queryClient.invalidateQueries({
        queryKey: ["ALL_POSTS"],
      });
      queryClient.invalidateQueries({
        queryKey: ["POST"],
      });
      toast.success("Post updated successfully");
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
      queryClient.invalidateQueries({
        queryKey: ["MY_POSTS"],
      });
      queryClient.invalidateQueries({
        queryKey: ["ALL_POSTS"],
      });
      queryClient.invalidateQueries({
        queryKey: ["POST"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetMyAllPosts = ({
  email,
  query,
}: {
  email: string | undefined;
  query?: string;
}) => {
  return useQuery({
    queryKey: ["MY_POSTS"],
    queryFn: async () => await getMyAllPost({ email, query }),
  });
};

export const useGetAllPosts = (query?: string) => {
  return useQuery({
    queryKey: ["ALL_POSTS"],
    queryFn: async () => await getAllPosts(query),
  });
};

export const useGetPost = (userId: string) => {
  return useQuery({
    queryKey: ["POST"],
    queryFn: async () => await getPost(userId),
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_POST"],
    mutationFn: async (postId) => await deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["MY_POSTS"],
      });
      queryClient.invalidateQueries({
        queryKey: ["ALL_POSTS"],
      });
      queryClient.invalidateQueries({
        queryKey: ["POST"],
      });
      toast.success("Post deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
