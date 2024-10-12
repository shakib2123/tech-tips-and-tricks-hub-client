import { IPost } from "@/types";
import ImageGallery from "./ImageGallery";
import ProfilePicture from "@/components/UI/ProfilePicture";
import { formatDistanceToNow } from "date-fns";
import FollowAction from "./FollowAction";

const PostCard = ({ post }: { post: IPost }) => {
  console.log(post);
  const {
    category,
    images,
    description,
    userId: user,
    createdAt,
    downvote,
    upvote,
    isPremium,
  } = post;
  console.log(user);
  return (
    <div className="max-w-3xl bg-slate-300 rounded-xl py-4">
      <div className=" px-4">
        <div className="mb-4 flex gap-2">
          <ProfilePicture src={user?.profilePhoto} />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold">{user?.name}</h3>
              <FollowAction userData={user} />
            </div>
            <p className="text-sm">
              {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
            </p>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <ImageGallery images={images} />
    </div>
  );
};

export default PostCard;
