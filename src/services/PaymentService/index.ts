"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const createStripeUserVerification = async (
  paymentInfo: Record<string, unknown>
) => {
  try {
    const res = await axiosInstance.post(
      `/payments/create-payment-checkout-session`,
      paymentInfo
    );
    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getPaymentsHistory = async () => {
  try {
    const res = await axiosInstance.get(`/payments`);
    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const getMyPaymentsHistory = async (email: string) => {
  try {
    const res = await axiosInstance.get(`/payments/${email}`);
    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
