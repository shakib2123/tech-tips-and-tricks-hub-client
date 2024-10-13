import { useEffect, useState } from "react";
import ProfilePicture from "@/components/UI/ProfilePicture";
import { useGetCurrentUser } from "@/hooks/user.hook";
import { Button, Skeleton, Spinner, Textarea } from "@nextui-org/react";
import AllComments from "./AllComments";
import { FaLocationArrow } from "react-icons/fa";
import { useCreateComment } from "@/hooks/comment.hook";

const CommentAction = ({ postId }: { postId: string }) => {
  const [comment, setComment] = useState("");
  const { data: userData, isPending } = useGetCurrentUser();
  const {
    mutate: createComment,
    isPending: isPendingComment,
    isSuccess: isCommentSuccess,
  } = useCreateComment();

  const handleComment = () => {
    const commentData = {
      postId,
      userId: userData?.data?._id,
      comment,
    };
    if (comment) {
      console.log(commentData);
      createComment(commentData);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (isCommentSuccess) {
      setComment("");
    }
  }, [isCommentSuccess]);

  return (
    <div className="px-4 pt-2 border-t border-gray-400">
      <h3 className="text-lg font-bold ">Comments:</h3>
      {isPending ? (
        <div className="max-w-full w-full flex gap-2">
          <div>
            <Skeleton className="flex rounded-full w-12 h-12" />
          </div>
          <div className="w-full">
            <Skeleton className="h-[100px] rounded-lg" />
          </div>
        </div>
      ) : (
        <div className="w-full mt-4 flex gap-2 relative">
          <div className="flex-1">
            <ProfilePicture src={userData?.data?.profilePhoto} />
          </div>
          <Textarea
            onChange={(e) => setComment(e.target.value)}
            variant="faded"
            label="Comment"
            value={comment}
            placeholder="Enter your comment here"
            className="w-[90%] md:w-full"
          />
          <Button
            className="absolute bottom-1 right-1 rounded-full"
            size="sm"
            color="primary"
            onClick={handleComment}
          >
            {isPendingComment ? (
              <Spinner size="sm" color="white" />
            ) : (
              <FaLocationArrow className="text-xl" />
            )}
          </Button>
        </div>
      )}
      <AllComments />
    </div>
  );
};

export default CommentAction;
