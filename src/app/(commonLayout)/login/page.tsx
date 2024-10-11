"use client";

import THForm from "@/components/form/THForm";
import THInput from "@/components/form/THInput";
import Loading from "@/components/UI/Loading";
import { useUser } from "@/context/user.provider";
import { useUserLogin } from "@/hooks/auth.hook";
import loginValidationSchema from "@/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const LoginPage = () => {
  const searchParams = useSearchParams();

  const router = useRouter();

  const { setIsLoading: userLoading } = useUser();

  const redirect = searchParams?.get("redirect");

  const { mutate: handleuselogin, isPending, isSuccess } = useUserLogin();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleuselogin(data);
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
  }, [isPending, isSuccess]);

  const registerURL = redirect ? `/register?redirect=${redirect}` : "/register";

  return (
    <>
      {isPending && <Loading />}
      <section className="min-h-[calc(100vh-200px)] h-full overflow-y-auto flex items-center justify-center py-8 bg-white">
        <div className="flex w-full flex-col items-center justify-center text-gray-900">
          <h3 className="my-2 text-lg md:text-2xl font-bold ">
            Login with Tech Tips & Tricks Hub
          </h3>
          <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
          <div className="lg:w-[35%]">
            <THForm
              resolver={zodResolver(loginValidationSchema)}
              onSubmit={onSubmit}
            >
              <div className="py-3 text-gray-900">
                <THInput label="Email" name="email" type="email" />
              </div>
              <div className="py-3 text-gray-900 flex flex-col gap-1">
                <THInput label="Password" name="password" type="password" />
                <Link
                  href="/change-password"
                  className="text-red-500 hover:underline text-sm"
                >
                  Forget Password?
                </Link>
              </div>

              <Button
                className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
                size="lg"
                type="submit"
              >
                Login
              </Button>
            </THForm>
            <div className="text-center">
              Don&lsquo;t have account ?{" "}
              <Link href={registerURL} className="font-bold">
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
