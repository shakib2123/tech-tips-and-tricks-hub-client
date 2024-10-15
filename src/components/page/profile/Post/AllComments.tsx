import ProfilePicture from "@/components/UI/ProfilePicture";
import { useUser } from "@/context/user.provider";
import {
  useDeleteComment,
  useGetComments,
  useUpdateComment,
} from "@/hooks/comment.hook";
import { IComment } from "@/types";
import { Button, Spinner, Textarea } from "@nextui-org/react";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const AllComments = ({ postId }: { postId: string }) => {
  const [showEditInput, setShowEditInput] = useState(false);
  const [updatedComment, setUpdatedComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const { user } = useUser();
  const { data: comments, refetch } = useGetComments({ postId });
  const { mutate: deleteComment } = useDeleteComment();
  const {
    mutate: updateComment,
    isPending: isCommentUpdatePending,
    isSuccess: isCommentSuccess,
  } = useUpdateComment();

  const handleDeleteComment = (id: string) => {
    deleteComment(id);
  };

  const handleCommentUpdate = () => {
    if (editingCommentId) {
      updateComment({ id: editingCommentId, comment: updatedComment });
    }
  };

  useEffect(() => {
    if (isCommentSuccess) {
      setShowEditInput(false);
      setUpdatedComment("");
      setEditingCommentId(null);
    }
  }, [isCommentSuccess]);

  useEffect(() => {
    refetch();
  }, [postId, refetch]);

  return (
    <div className="mt-6 flex flex-col gap-4">
      {comments?.data?.map((comment: IComment) => (
        <div key={comment._id} className="bg-gray-200 p-4 rounded-lg">
          <div className="flex-1 flex gap-2">
            <ProfilePicture src={comment?.userId?.profilePhoto} />
            <div className="flex-1 flex justify-between">
              <div>
                <h3 className="font-bold">{comment?.userId?.name}</h3>
                <p className="text-sm">
                  {formatDistanceToNow(new Date(comment?.createdAt), {
                    addSuffix: true,
                  })}
                </p>
              </div>
              {user?._id === comment?.userId._id && (
                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      setShowEditInput(!showEditInput);
                      setEditingCommentId(comment?._id);
                      setUpdatedComment(comment.comment);
                    }}
                    size="sm"
                  >
                    <FaPen className="text-lg" />
                  </Button>
                  <Button
                    onClick={() => handleDeleteComment(comment._id)}
                    size="sm"
                    color="danger"
                  >
                    <MdDelete className="text-xl" />
                  </Button>
                </div>
              )}
            </div>
          </div>
          <p className="mt-1">{comment.comment}</p>
          {editingCommentId === comment._id && showEditInput && (
            <div className="w-full mt-4 flex gap-2 relative">
              <Textarea
                onChange={(e) => setUpdatedComment(e.target.value)}
                variant="faded"
                value={updatedComment}
                placeholder="Enter your comment here"
                className="w-[90%] md:w-full"
              />
              <Button
                className="absolute bottom-1 right-1 rounded-full"
                size="sm"
                color="primary"
                onClick={handleCommentUpdate}
              >
                {isCommentUpdatePending ? (
                  <Spinner size="sm" color="white" />
                ) : (
                  <FaLocationArrow className="text-xl" />
                )}
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllComments;
