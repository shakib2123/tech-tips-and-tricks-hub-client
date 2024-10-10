import { VerifiedBadge } from "@/assets/icons";
import ChangeCoverPhoto from "@/components/user/ChangeCoverPhoto";
import ChangeProfilePhoto from "@/components/user/ChangeProfilePhoto";
import GetVerifiedBadge from "@/components/user/GetVerifiedBadge";
import UserInfo from "@/components/user/UserInfo";
import { getCurrentUserFromDB } from "@/services/UserService";
import Image from "next/image";

const ProfilePage = async () => {
  const { data } = await getCurrentUserFromDB();

  console.log(data);

  return (
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
                className="rounded-full p-1 bg-gray-600 w-full"
              />
              <ChangeProfilePhoto />
            </div>
            {/* Profile data */}
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-2">
                <h1 className="text-[32px] font-bold">{data?.name}</h1>
                {!data?.isVerified ? <GetVerifiedBadge /> : <VerifiedBadge />}
              </div>
              <p className="font-medium">
                <span>{data?.followers?.length} followers</span>
                <span>, {data?.following?.length} following</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Posts & about */}
      <div className="max-w-screen-xl mx-auto p-4 my-3 flex flex-col lg:flex-row gap-4 justify-between">
        {/* User Info */}
        <UserInfo data={data} />
        <h1>Posts</h1>
      </div>
    </section>
  );
};

export default ProfilePage;
