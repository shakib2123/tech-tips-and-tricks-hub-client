"use client";

import THForm from "@/components/form/THForm";
import THInput from "@/components/form/THInput";
import { useResetPassword } from "@/hooks/auth.hook";
import { Button, Spinner } from "@nextui-org/react";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const ResetPassword = () => {
  const id = useSearchParams().get("id");
  const token = useSearchParams().get("token");
  const router = useRouter();

  const { mutate: resetPassword, isPending, isSuccess } = useResetPassword();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const userData = {
      id,
      token,
      newPassword: data.newPassword,
    };

    resetPassword(userData);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      router.push("/login");
    }
  }, [isPending, isSuccess, router]);

  return (
    <Suspense
      fallback={
        <div>
          <Spinner size="lg" />
        </div>
      }
    >
      <section className="min-h-screen flex items-center justify-center text-gray-900 py-8 px-3">
        <div>
          <h2 className="text-xl font-bold mb-4 text-center">
            Change Password
          </h2>
          <THForm onSubmit={onSubmit}>
            {/* email */}
            <div className="max-w-xl">
              <THInput
                label="New Password"
                name="newPassword"
                type="password"
                required
                className="md:min-w-80"
              />
            </div>
            <Button color="primary" type="submit" className="w-full mt-4">
              {isPending ? <Spinner size="sm" color="white" /> : "Submit"}
            </Button>
          </THForm>
        </div>
      </section>
    </Suspense>
  );
};

export default dynamic(() => Promise.resolve(ResetPassword), { ssr: false });
