import { Button } from "@nextui-org/react";
import Link from "next/link";
import { ImCancelCircle } from "react-icons/im";

const PaymentCancel = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="p-8 rounded-xl shadow-custom-light flex flex-col items-center justify-center">
        <ImCancelCircle className="text-6xl text-red-500 mb-4" />
        <h2 className=" text-2xl font-semibold text-gray-100">
          Payment Cancelled
        </h2>
        <p className="text-gray-300 mt-2">Your payment was cancelled!</p>
        <Link href={"/profile"}>
          <Button className="mt-4 w-full bg-red-500 hover:bg-red-600">
            Return to Profile
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default PaymentCancel;
