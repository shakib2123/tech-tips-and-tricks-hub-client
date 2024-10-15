"use client";

import PaymentTable from "@/components/page/dashboard/PaymentTable";
import { useUser } from "@/context/user.provider";
import { useGetMyPaymentsHistory } from "@/hooks/payment.hook";
import { Spinner } from "@nextui-org/react";

const Payments = () => {
  const { user } = useUser();
  const { data: payments, isLoading } = useGetMyPaymentsHistory(
    user?.email as string
  );

  console.log(payments);

  return (
    <>
      {isLoading && (
        <div className=" min-h-screen flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      <section className="max-w-screen-xl mx-auto p-3 min-h-screen">
        <div className="my-4">
          <h1 className="text-2xl font-bold">Payments</h1>
          <p className="text-gray-500">View your payments history</p>
        </div>
        <PaymentTable payments={payments?.data} />
      </section>
    </>
  );
};

export default Payments;
