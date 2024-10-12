import { useUser } from "@/context/user.provider";
import { useCreateFollow, useCreateUnfollow } from "@/hooks/follow.hook";
import { IUser } from "@/types";
import { Button, Spinner } from "@nextui-org/react";

const FollowAction = ({ userData }: { userData: IUser }) => {
  const { user } = useUser();
  const followerId = user?._id;

  const { mutate: createFollow, isPending } = useCreateFollow();
  const { mutate: createUnfollow, isPending: isUnfollowPending } =
    useCreateUnfollow();

  const handleFollow = async () => {
    const followData = {
      followerId,
      followingId: userData._id,
    };

    createFollow(followData);
  };

  const handleUnfollow = async () => {
    const unfollowData = {
      followerId,
      followingId: userData._id,
    };

    createUnfollow(unfollowData);
  };

  const isFollowing = userData?.following?.includes(followerId as string);

  return (
    <div className={userData?._id === user?._id ? "hidden" : "block"}>
      {!isFollowing ? (
        <Button onClick={handleFollow} color="primary" size="sm">
          {isPending ? <Spinner size="sm" color="white" /> : "Follow"}
        </Button>
      ) : (
        <Button onClick={handleUnfollow} color="primary" size="sm">
          {isUnfollowPending ? <Spinner size="sm" color="white" /> : "UnFollow"}
        </Button>
      )}
    </div>
  );
};

export default FollowAction;
