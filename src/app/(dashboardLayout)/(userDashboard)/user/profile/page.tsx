"use client";
import { VerifiedBadge } from "@/assets/icons";
import Loading from "@/components/UI/Loading";
import ChangeCoverPhoto from "@/components/user/ChangeCoverPhoto";
import ChangeProfilePhoto from "@/components/user/ChangeProfilePhoto";
import GetVerifiedBadge from "@/components/user/GetVerifiedBadge";
import UserInfo from "@/components/user/UserInfo";
import { useGetCurrentUser } from "@/hooks/user.hook";
import Image from "next/image";

const UserProfile = () => {
  const { data: userData, isPending, error } = useGetCurrentUser();
  const data = userData?.data || {};

  if (error)
    return (
      <div className="text-red-500 flex items-center justify-center min-h-screen">
        Error loading data
      </div>
    );

  return (
    <>
      {isPending && <Loading />}
      <section className="max-w-screen-xl mx-auto px-2 min-h-screen w-full">
        <div className="bg-slate-200 w-full h-fit rounded-b-lg">
          <div className="max-w-screen-xl mx-auto">
            {/* Cover Photo */}
            <div
              style={{ backgroundImage: `url(${data.coverPhoto})` }}
              className="w-full h-64 md:h-80 lg:rounded-b-lg bg-cover bg-center flex items-end justify-end p-4 md:p-8"
            >
              <ChangeCoverPhoto />
            </div>
            {/* Profile Photo */}
            <div className="-mt-12 p-4 flex flex-col lg:flex-row items-center gap-4">
              {/* Profile Image */}
              <div className="size-44 relative">
                <Image
                  src={data?.profilePhoto}
                  width={200}
                  height={200}
                  alt="profile"
                  className="rounded-full p-1 bg-gray-600 w-full h-full object-cover"
                />
                <ChangeProfilePhoto />
              </div>
              {/* Profile data */}
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-2">
                  <h1 className="text-[32px] font-bold">{data?.name}</h1>
                  {!data?.isVerified ? (
                    <GetVerifiedBadge user={data} />
                  ) : (
                    <VerifiedBadge />
                  )}
                </div>
                <p className="font-medium">
                  <span>{data?.followers?.length | 0} followers</span>
                  <span>, {data?.following?.length | 0} following</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full my-4">
          <UserInfo data={data} />
        </div>
      </section>
    </>
  );
};

export default UserProfile;
