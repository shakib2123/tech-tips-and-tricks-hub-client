"use client";

import { VerifiedBadge } from "@/assets/icons";
import MyPosts from "@/components/page/profile/Post/MyPosts";
import CreatePost from "@/components/shared/CreatePost";
import Loading from "@/components/UI/Loading";
import ChangeCoverPhoto from "@/components/user/ChangeCoverPhoto";
import ChangeProfilePhoto from "@/components/user/ChangeProfilePhoto";
import UserInfo from "@/components/user/UserInfo";
import { useGetCurrentUser } from "@/hooks/user.hook";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  const { data: userData, isPending, error, isSuccess } = useGetCurrentUser();
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
      <section className=" text-gray-900">
        <div className="bg-slate-200">
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
                    <Link href="/get-verified">
                      <Button size="sm" color="primary">
                        Get Verified
                      </Button>
                    </Link>
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
        {/* Posts & about */}
        <div className="max-w-screen-xl mx-auto p-4 my-3 flex flex-col lg:flex-row gap-4 justify-between">
          {/* User Info */}
          <UserInfo data={data} />

          {/* posts */}
          <div className="basis-3/5">
            <CreatePost userData={data} />
            {isSuccess && <MyPosts email={data?.email} />}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
