import {
  createStripeUserVerification,
  getCurrentUserFromDB,
  updateUserInfo,
} from "@/services/UserService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ["CURRENT_USER"],
    queryFn: async () => await getCurrentUserFromDB(),
  });
};

export const useUpdateUserInfo = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_UPDATE"],
    mutationFn: async ({ email, updatedData }) =>
      await updateUserInfo(email, updatedData),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["CURRENT_USER"] });
      toast.success("User details updated successfully!.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetUserVerification = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_UPDATE"],
    mutationFn: async (paymentInfo) =>
      await createStripeUserVerification(paymentInfo),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["CURRENT_USER"] });
      toast.success("User verified successfully!.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
