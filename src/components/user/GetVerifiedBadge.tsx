import { useGetUserVerification } from "@/hooks/user.hook";
import { IUser } from "@/types";
import { Button, Spinner } from "@nextui-org/react";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "sonner";
const GetVerifiedBadge = ({ user }: { user: IUser }) => {
  const {
    mutate: createStripeUserVerification,
    isPending,
    data: stripeData,
  } = useGetUserVerification();
  console.log(stripeData);

  const handlePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OER86HEX9A0fqDWpBfD9mXrFNPdZhi2JvaRHjZLWnjeN3VdNnt0ai2kCD4cnOjR655KhcOPLrNCxeZkqPO6L2t900GjzCjnxa"
    );

    const paymentInfo = {
      email: user?.email,
      name: user?.name,
      amount: 20,
      description: "Get Verified For One Month",
      subscriptionDate: new Date(),
      expireSubscriptionDate: new Date(
        new Date().setMonth(new Date().getMonth() + 1)
      ),
    };

    createStripeUserVerification(paymentInfo);

    const result = await stripe?.redirectToCheckout({
      sessionId: stripeData?.data?.data?.id,
    });

    if (result?.error) {
      toast.error("Something went wrong. Try again later.");
    }
  };

  return (
    <div>
      <Button onClick={handlePayment} size="sm" color="primary">
        {isPending ? <Spinner color="white" size="sm" /> : "Get Verified"}
      </Button>
    </div>
  );
};

export default GetVerifiedBadge;
