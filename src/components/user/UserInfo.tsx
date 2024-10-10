"use client";

import { IUser } from "@/types";
import { Button } from "@nextui-org/react";
import { FaLocationDot, FaLink, FaPhone } from "react-icons/fa6";
import { UserInfoUpdateModal } from "../modals/UserModal";
const UserInfo = ({ data }: { data: IUser }) => {
  return (
    <div className="basis-2/5 p-4 bg-slate-200 rounded-lg">
      <h2 className="text-xl font-bold">Intro</h2>
      {/* bio */}
      <div className="flex flex-col gap-2 my-2">
        {data?.bio && <p>{data?.bio}</p>}
        <Button>{data?.bio ? "Edit bio" : "Add bio"}</Button>
      </div>
      {/* location  */}
      <div className="flex flex-col gap-2 my-4">
        {data?.location && (
          <p className="flex items-center gap-1">
            <FaLocationDot /> {data?.location}
          </p>
        )}
      </div>
      {/* website */}
      <div className="flex flex-col gap-2 my-4">
        {data?.website && (
          <p className="flex items-center gap-1">
            <FaLink />
            {data?.website}
          </p>
        )}
      </div>
      {/* mobileNumber */}
      <div className="flex flex-col gap-2 my-4">
        {data?.mobileNumber && (
          <p className="flex items-center gap-1">
            <FaPhone /> {data?.mobileNumber}
          </p>
        )}
      </div>

      <div className="w-full">
        <UserInfoUpdateModal userData={data} />
      </div>
    </div>
  );
};

export default UserInfo;
