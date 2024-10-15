import { useGetUserVerification } from "@/hooks/payment.hook";
import { IUser } from "@/types";
import { Button, Spinner } from "@nextui-org/react";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

const GetVerifiedBadge = ({ user }: { user: IUser }) => {
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
    <div>
      <Button onClick={handlePayment} size="sm" color="primary">
        {isPending ? <Spinner color="white" size="sm" /> : "Get Verified"}
      </Button>
    </div>
  );
};

export default GetVerifiedBadge;
