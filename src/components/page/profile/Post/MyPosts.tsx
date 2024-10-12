import { useGetMyAllPosts } from "@/hooks/post.hook";
import { Spinner } from "@nextui-org/react";
import PostCard from "./PostCard";
import { IPost } from "@/types";

const MyPosts = ({ email }: { email: string }) => {
  const { data: posts, isLoading: postsLoading } = useGetMyAllPosts(email);

  return (
    <div>
      {postsLoading ? (
        <div className="w-full mt-4 h-96 flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      ) : (
        <div className="w-full mt-4">
          {posts?.data?.map((post: IPost) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPosts;
