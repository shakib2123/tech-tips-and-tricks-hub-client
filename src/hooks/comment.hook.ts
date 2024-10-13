import {
  createCommentIntoDB,
  deleteCommentsFromDB,
  getCommentsFromDB,
} from "@/services/CommentService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useCreateComment = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_COMMENT"],
    mutationFn: async (commentData) => await createCommentIntoDB(commentData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_COMMENTS"] });
      toast.success("Comment added successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
export const useGetComments = () => {
  return useQuery<any, Error, FieldValues>({
    queryKey: ["GET_COMMENTS"],
    queryFn: async () => await getCommentsFromDB(),
  });
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_COMMENT"],
    mutationFn: async (id) => await deleteCommentsFromDB(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_COMMENTS"] });
      toast.success("Comment deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
