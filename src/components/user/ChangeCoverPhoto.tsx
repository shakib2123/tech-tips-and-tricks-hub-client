"use client";

import React from "react";
import { FaCamera } from "react-icons/fa";

const ChangeCoverPhoto = () => {
  const handleChangeCoverPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    console.log(file);
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
              Edit cover photo
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
