"use client";
import { FaCamera } from "react-icons/fa";

const ChangeProfilePhoto = () => {
  const handleChangeProfilePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    console.log(file);
  };
  return (
    <div className="flex items-center justify-center w-fit bg-gray-100 p-2 rounded-full absolute bottom-4 right-2">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center hover:cursor-pointer"
      >
        <FaCamera className="text-[16px]" />
        <input
          onChange={handleChangeProfilePhoto}
          id="dropzone-file"
          type="file"
          className="hidden"
        />
      </label>
    </div>
  );
};

export default ChangeProfilePhoto;
