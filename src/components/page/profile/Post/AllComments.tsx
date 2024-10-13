import ProfilePicture from "@/components/UI/ProfilePicture";
import { useDeleteComment, useGetComments } from "@/hooks/comment.hook";
import { IComment } from "@/types";
import { Button } from "@nextui-org/react";
import { formatDistanceToNow } from "date-fns";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AllComments = () => {
  const { data: comments } = useGetComments();

  const { mutate: deleteComment } = useDeleteComment();

  const handleDeleteComment = (id: string) => {
    deleteComment(id);
  };

  return (
    <div className="mt-6 flex flex-col gap-4">
      {comments?.data?.map((comment: IComment) => (
        <div key={comment._id} className="bg-gray-200 p-4 rounded-lg">
          <div className="flex-1 flex gap-2">
            <ProfilePicture src={comment?.userId?.profilePhoto} />
            <div className=" flex-1 flex justify-between">
              <div>
                <h3 className="font-bold">{comment?.userId?.name}</h3>
                <p className="text-sm">
                  {formatDistanceToNow(new Date(comment?.createdAt), {
                    addSuffix: true,
                  })}
                </p>
              </div>

              <div className="flex gap-2">
                <Button size="sm" className="">
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
            </div>
          </div>
          <p className="mt-1">{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default AllComments;
