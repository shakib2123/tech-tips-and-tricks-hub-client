"use client";

import THForm from "@/components/form/THForm";
import THInput from "@/components/form/THInput";
import { useUserRegistration } from "@/hooks/auth.hook";
import registerValidationSchema from "@/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateAdmin = () => {
  const router = useRouter();

  const {
    mutate: handleUserRegistration,
    isPending,
    isSuccess,
  } = useUserRegistration();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      ...data,
      role: "ADMIN",
      coverPhoto: "https://flowbite.com/docs/images/examples/image-3@2x.jpg",
      profilePhoto: "https://i.ibb.co.com/GCH2Gjv/blank-profile-picture.webp",
    };

    handleUserRegistration(userData);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      router.push("/admin/admins-management");
    }
  }, [isPending, isSuccess, router]);

  return (
    <>
      <section className="min-h-[calc(100vh-200px)] h-full overflow-y-auto flex items-center justify-center py-8 bg-white">
        <div className="flex w-full flex-col items-center justify-center text-gray-900">
          <h3 className="my-2 text-lg md:text-2xl font-bold">
            Create Admin Account
          </h3>
          <p className="mb-4">
            To create an admin account provide the following information
          </p>
          <div className="lg:w-[35%]">
            <THForm
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
                {isPending ? (
                  <div className="flex items-center justify-center gap-1">
                    <Spinner size="sm" /> Creating...
                  </div>
                ) : (
                  "Create Admin"
                )}
              </Button>
            </THForm>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateAdmin;
