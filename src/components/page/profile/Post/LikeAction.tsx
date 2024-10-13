import { useVoteUpdate } from "@/hooks/post.hook";
import { IPost } from "@/types";
import { Button, Spinner } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { BiLike, BiDislike } from "react-icons/bi";

const LikeAction = ({ post }: { post: IPost }) => {
  const [isUpvoteLoading, setIsUpvoteLoading] = useState(false);
  const [isDownvoteLoading, setIsDownvoteLoading] = useState(false);
  const { mutate: updateVote, isPending } = useVoteUpdate();
  console.log(post);

  useEffect(() => {
    if (!isPending) {
      setIsUpvoteLoading(false);
      setIsDownvoteLoading(false);
    }
  }, [isPending]);

  const handleUpvote = () => {
    const voteData = {
      postId: post?._id,
      userId: post?.userId?._id,
      voteType: "upvote",
    };
    setIsUpvoteLoading(true);
    updateVote(voteData);
  };

  const handleDownvote = () => {
    const voteData = {
      postId: post?._id,
      userId: post?.userId?._id,
      voteType: "downvote",
    };
    setIsDownvoteLoading(true);
    updateVote(voteData);
  };

  return (
    <div>
      <Button onClick={handleUpvote} variant="ghost" className="p-2 mr-4">
        {isUpvoteLoading ? (
          <Spinner size="sm" color="white" />
        ) : (
          post?.upvote?.length || 0
        )}
        <BiLike className="text-2xl" />
      </Button>
      <Button onClick={handleDownvote} variant="ghost" className="p-2">
        {isDownvoteLoading ? (
          <Spinner size="sm" color="white" />
        ) : (
          post?.downvote?.length || 0
        )}
        <BiDislike className="text-2xl" />
      </Button>
    </div>
  );
};

export default LikeAction;
