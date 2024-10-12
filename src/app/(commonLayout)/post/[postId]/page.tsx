"use client";
import CommentAction from "@/components/page/profile/Post/CommentAction";
import FollowAction from "@/components/page/profile/Post/FollowAction";
import ImageGallery from "@/components/page/profile/Post/ImageGallery";
import LikeAction from "@/components/page/profile/Post/LikeAction";
import Loading from "@/components/UI/Loading";
import ProfilePicture from "@/components/UI/ProfilePicture";
import { useGetPost } from "@/hooks/post.hook";
import { formatDistanceToNow } from "date-fns";

const PostDetails = ({
  params: { postId },
}: {
  params: { postId: string };
}) => {
  const { data: post, isPending, isSuccess } = useGetPost(postId);

  const user = post?.data?.userId; // Ensure you're using the correct user data

  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
        <section className="min-h-screen text-gray-900 flex justify-center px-2 lg:px-0">
          <div className="max-w-screen-xl mx-auto h-fit  rounded-lg bg-slate-300 my-6 py-4">
            <div className="w-full">
              <div className="px-4">
                <div className="mb-4 flex gap-2">
                  <ProfilePicture src={user?.profilePhoto} />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold">{user?.name}</h3>
                      <FollowAction userData={user} />
                      <div
                        className={`text-xs ${
                          post?.data?.isPremium
                            ? "text-gray-900 p-1 rounded-md bg-amber-200"
                            : "hidden"
                        }`}
                      >
                        Premium
                      </div>
                    </div>
                    <p className="text-sm">
                      {post?.data?.createdAt
                        ? formatDistanceToNow(new Date(post.data.createdAt), {
                            addSuffix: true,
                          })
                        : "Date not available"}
                    </p>
                  </div>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: post?.data?.description }}
                />
              </div>
              <ImageGallery images={post?.data?.images} />
            </div>
            <div className="flex items-center py-4 border-t px-4">
              <LikeAction post={post?.data} />
              <CommentAction />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PostDetails;
