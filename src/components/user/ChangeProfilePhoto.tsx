"use client";
import envConfig from "@/config/envConfig";
import { useUser } from "@/context/user.provider";
import { useUpdateUserInfo } from "@/hooks/user.hook";
import { Spinner } from "@nextui-org/react";
import axios from "axios";

import { FaCamera } from "react-icons/fa";
import { toast } from "sonner";

const apiKey = envConfig.imagebb_api_key;
const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

const ChangeProfilePhoto = () => {
  const { user } = useUser();

  const { mutate: handleUpdateUserInfo, isPending } = useUpdateUserInfo();

  const handleChangeProfilePhoto = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const formData = new FormData();
    formData.append("image", e.target.files![0]);
    try {
      const response = await axios.post(url, formData);
      const imgData = response.data.data.url;

      const updatedData = {
        profilePhoto: imgData,
      };
      handleUpdateUserInfo({ email: user?.email, updatedData });
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    }
  };
  return (
    <div className="flex items-center justify-center w-fit bg-gray-100 p-2 rounded-full absolute bottom-4 right-2">
      <label
        htmlFor="profilePhoto"
        className="flex flex-col items-center justify-center hover:cursor-pointer"
      >
        {isPending ? (
          <Spinner size="sm" />
        ) : (
          <FaCamera className="text-[16px]" />
        )}
        <input
          onChange={handleChangeProfilePhoto}
          id="profilePhoto"
          type="file"
          className="hidden"
        />
      </label>
    </div>
  );
};

export default ChangeProfilePhoto;
