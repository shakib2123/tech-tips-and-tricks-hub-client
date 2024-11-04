import {
  createStripeUserVerification,
  getMyPaymentsHistory,
  getPaymentsHistory,
} from "@/services/PaymentService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useGetUserVerification = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_UPDATE"],
    mutationFn: async (paymentInfo) =>
      await createStripeUserVerification(paymentInfo),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["CURRENT_USER"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetPaymentsHistory = () => {
  return useQuery({
    queryKey: ["GET_PAYMENTS"],
    queryFn: async () => await getPaymentsHistory(),
  });
};
export const useGetMyPaymentsHistory = (email: string) => {
  return useQuery({
    queryKey: ["GET_MY_PAYMENTS"],
    queryFn: async () => await getMyPaymentsHistory(email),
  });
};
