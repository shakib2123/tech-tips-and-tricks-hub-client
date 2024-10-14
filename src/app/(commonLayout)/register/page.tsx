"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import THForm from "@/components/form/THForm";
import THInput from "@/components/form/THInput";
import registerValidationSchema from "@/schemas/register.schema";
import { useUserRegistration } from "@/hooks/auth.hook";
import Loading from "@/components/UI/Loading";
import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/context/user.provider";
import { Spinner } from "@nextui-org/react";
import dynamic from "next/dynamic";

function RegisterPage() {
  const searchParams = useSearchParams();

  const router = useRouter();

  const { setIsLoading: userLoading } = useUser();

  const {
    mutate: handleUserRegistration,
    isPending,
    isSuccess,
  } = useUserRegistration();

  const redirect = searchParams?.get("redirect");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      ...data,
      coverPhoto: "https://flowbite.com/docs/images/examples/image-3@2x.jpg",
      profilePhoto: "https://i.ibb.co.com/GCH2Gjv/blank-profile-picture.webp",
    };

    handleUserRegistration(userData);

    userLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess, redirect, router]);

  const loginURL = redirect ? `/login?redirect=${redirect}` : "/login";

  return (
    <Suspense
      fallback={
        <div>
          <Spinner size="lg" />
        </div>
      }
    >
      {isPending && <Loading />}
      <section className="min-h-[calc(100vh-200px)] h-full overflow-y-auto flex items-center justify-center py-8 bg-white">
        <div className="flex w-full flex-col items-center justify-center text-gray-900">
          <h3 className="my-2 text-lg md:text-2xl font-bold">
            Login with Tech Tips & Tricks Hub
          </h3>
          <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
          <div className="lg:w-[35%]">
            <THForm
              // //! Only for development
              // defaultValues={{
              //   name: "Shakib",
              //   email: "shakib@gmail.com",
              //   mobileNumber: "01711223344",
              //   password: "123456",
              // }}
              resolver={zodResolver(registerValidationSchema)}
              onSubmit={onSubmit}
            >
              <div className="py-3 w-full">
                <THInput label="Name" name="name" size="sm" />
              </div>
              <div className="py-3">
                <THInput label="Email" name="email" size="sm" />
              </div>
              <div className="py-3">
                <THInput label="Mobile Number" name="mobileNumber" size="sm" />
              </div>
              <div className="py-3">
                <THInput
                  label="Password"
                  name="password"
                  size="sm"
                  type="password"
                />
              </div>

              <Button
                className="my-3 w-full rounded-md bg-default-900 text-default"
                size="lg"
                type="submit"
              >
                Sign Up
              </Button>
            </THForm>
            <div className="text-center">
              Already have an account ?{" "}
              <Link href={loginURL} className="font-bold">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}

export default dynamic(() => Promise.resolve(RegisterPage), { ssr: false });
