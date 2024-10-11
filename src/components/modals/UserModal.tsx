import { FieldValues, SubmitHandler } from "react-hook-form";
import THModal from "./THModal";
import THForm from "../form/THForm";
import THInput from "../form/THInput";
import { Button } from "@nextui-org/react";
import { useUpdateUserInfo } from "@/hooks/user.hook";
import { IUser } from "@/types";
import THTextarea from "../form/THTextarea";

export const UserInfoUpdateModal = ({ userData }: { userData: IUser }) => {
  const { mutate: handleUpdateUserInfo, isPending } = useUpdateUserInfo();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const updatedData = {
      bio: data.bio,
      location: data.location,
      website: data.website,
      mobileNumber: data.mobileNumber,
    };
    console.log(updatedData);

    handleUpdateUserInfo({ email: userData.email, updatedData });
  };

  return (
    <>
      <THModal
        buttonClassName="flex-1 w-full"
        buttonText="Edit details"
        title="Update user information"
      >
        <THForm
          onSubmit={onSubmit}
          defaultValues={{
            bio: userData.bio,
            location: userData.location,
            website: userData.website,
            mobileNumber: userData.mobileNumber,
          }}
        >
          <div className="space-y-4">
            <THTextarea label="Bio" name="bio" required />
            <THInput label="Location" name="location" required />
            <THInput label="Website" name="website" type="url" required />
            <THInput label="Mobile Number" name="mobileNumber" required />
            <div>
              <Button
                disabled={isPending}
                className="w-full flex-1 my-2"
                size="lg"
                type="submit"
              >
                {isPending ? "Updating...." : "Update details"}
              </Button>
            </div>
          </div>
        </THForm>
      </THModal>
    </>
  );
};
