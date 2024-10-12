"use client";

import { IUser } from "@/types";
import { FaLocationDot, FaLink, FaPhone } from "react-icons/fa6";
import { UserInfoUpdateModal } from "../modals/UserModal";
import Link from "next/link";
const UserInfo = ({ data }: { data: IUser }) => {
  return (
    <div className="basis-2/5 p-4 bg-slate-200 rounded-lg h-fit sticky">
      <h2 className="text-xl font-bold">Intro</h2>
      {/* bio */}
      <div className="flex flex-col gap-2 my-4">
        {data?.bio && <p className="text-center px-4">{data?.bio}</p>}
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
            <Link href={data?.website} className="text-primary hover:underline">
              {data?.website}
            </Link>
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
