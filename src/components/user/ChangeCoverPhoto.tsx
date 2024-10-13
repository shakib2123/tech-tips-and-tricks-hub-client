"use client";

import envConfig from "@/config/envConfig";
import { useUser } from "@/context/user.provider";
import { useUpdateUserInfo } from "@/hooks/user.hook";

import axios from "axios";
import React from "react";
import { FaCamera } from "react-icons/fa";
import { toast } from "sonner";

const apiKey = envConfig.imagebb_api_key;
const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

const ChangeCoverPhoto = () => {
  const { user } = useUser();

  const { mutate: handleUpdateUserInfo, isPending } = useUpdateUserInfo();

  const handleChangeCoverPhoto = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const formData = new FormData();
    formData.append("image", e.target.files![0]);

    try {
      const response = await axios.post(url, formData);

      const imgData = await response.data.data.url;

      const updatedData = {
        coverPhoto: imgData,
      };
      handleUpdateUserInfo({ email: user?.email, updatedData });
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <div className="flex p-2 text-gray-700 text-sm gap-1">
            <FaCamera className="text-[16px]" />
            <span className="font-semibold hidden lg:block">
              {isPending ? "Updating..." : "Edit cover photo"}
            </span>
          </div>
          <input
            onChange={handleChangeCoverPhoto}
            id="dropzone-file"
            type="file"
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default ChangeCoverPhoto;
