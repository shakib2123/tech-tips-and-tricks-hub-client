import { createCommentIntoDB } from "@/services/CommentService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
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
