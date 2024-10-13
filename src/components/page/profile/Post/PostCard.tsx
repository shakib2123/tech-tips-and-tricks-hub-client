import { IPost } from "@/types";
import ImageGallery from "./ImageGallery";
import ProfilePicture from "@/components/UI/ProfilePicture";
import { formatDistanceToNow } from "date-fns";
import FollowAction from "./FollowAction";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const PostCard = ({ post }: { post: IPost }) => {
  const { images, description, userId: user, createdAt, isPremium } = post;

  return (
    <div className="w-full lg:w-[900px] bg-slate-300 rounded-xl py-4">
      <div className=" px-4">
        <div className="mb-4 flex gap-2">
          <ProfilePicture src={user?.profilePhoto} />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold">{user?.name}</h3>
              <FollowAction userData={user} />
              <div
                className={`text-xs ${
                  isPremium
                    ? "text-gray-900 p-1 rounded-md bg-amber-200"
                    : "hidden"
                }`}
              >
                Premium
              </div>
            </div>
            <p className="text-sm">
              {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
            </p>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <ImageGallery images={images} />
      <div className="px-4 mt-4 w-full">
        <Button
          isDisabled={isPremium && !user?.isVerified}
          color="primary"
          className="w-full p-4"
        >
          <Link href={`/post/${post._id}`} className="p-4 w-full">
            See Details
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PostCard;
