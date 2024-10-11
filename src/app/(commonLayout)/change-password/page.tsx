"use client";

import THForm from "@/components/form/THForm";
import THInput from "@/components/form/THInput";
import { useChangePassword } from "@/hooks/auth.hook";
import { Button, Spinner } from "@nextui-org/react";

import { FieldValues, SubmitHandler } from "react-hook-form";

const ChangePasswordPage = () => {
  const { mutate: changePassword, isPending, isSuccess } = useChangePassword();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

    changePassword(data);
  };

  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-0 min-h-screen flex items-center justify-center py-8 text-gray-900">
      {isSuccess ? (
        <h1 className="text-xl">Check your email for password reset link.</h1>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4 text-center">
            Change Password
          </h2>
          <THForm onSubmit={onSubmit}>
            {/* email */}
            <div className="max-w-xl">
              <THInput
                label="Email"
                name="email"
                type="email"
                required
                className="md:min-w-80"
              />
            </div>
            <Button color="primary" type="submit" className="w-full mt-4">
              {isPending ? <Spinner size="sm" color="white" /> : "Submit"}
            </Button>
          </THForm>
        </div>
      )}
    </section>
  );
};

export default ChangePasswordPage;
