import { useUser } from "@/context/user.provider";
import { useGetUserVerification } from "@/hooks/payment.hook";
import { Button, Spinner } from "@nextui-org/react";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

const GetVerifiedBadge = () => {
  const { user } = useUser();
  const {
    mutate: createStripeUserVerification,
    isPending,
    data: stripeData,
    isSuccess,
  } = useGetUserVerification();

  const handlePayment = async () => {
    const paymentInfo = {
      email: user?.email,
      name: user?.name,
      amount: 20,
      description: "Get Verified For One Month",
      subscriptionDate: new Date(Date.now()).toISOString(),
      expireSubscriptionDate: new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000
      ).toISOString(),
    };

    createStripeUserVerification(paymentInfo);
  };

  useEffect(() => {
    const redirectToStripe = async () => {
      if (isSuccess && stripeData?.data?.id) {
        const stripe = await loadStripe(
          "pk_test_51OER86HEX9A0fqDWpBfD9mXrFNPdZhi2JvaRHjZLWnjeN3VdNnt0ai2kCD4cnOjR655KhcOPLrNCxeZkqPO6L2t900GjzCjnxa"
        );
        await stripe?.redirectToCheckout({
          sessionId: stripeData?.data?.id,
        });
      }
    };

    redirectToStripe();
  }, [isSuccess, stripeData]);

  return (
    <section className="mx-auto min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-2 max-w-lg w-full p-4 rounded-xl bg-slate-200">
        <h2 className="text-gray-800 font-medium text-center text-2xl">
          Get Verified For One Month!
        </h2>
        <h2 className="text-gray-600 text-center text-lg font-medium">
          Total $20/month for subscription
        </h2>
        <p className="text-gray-700 text-center">
          You will be able to access premium posts!
        </p>
        <p className="text-gray-700 text-center">
          You will be able to access all the features!
        </p>
        <Button onClick={handlePayment} color="primary" className="w-full">
          {isPending ? <Spinner color="white" size="sm" /> : "Get Verified"}
        </Button>
      </div>
    </section>
  );
};

export default GetVerifiedBadge;
