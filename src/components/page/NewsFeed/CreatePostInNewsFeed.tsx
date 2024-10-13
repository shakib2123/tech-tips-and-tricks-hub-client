"use client";

import CreatePost from "@/components/shared/CreatePost";
import { useGetCurrentUser } from "@/hooks/user.hook";
import { Spinner } from "@nextui-org/react";

const CreatePostInNewsFeed = () => {
  const { data, isPending } = useGetCurrentUser();

  const userData = data?.data || {};

  return (
    <>
      {isPending ? (
        <div className="w-full  flex justify-center items-center min-w-[300px]">
          <Spinner size="lg" />
        </div>
      ) : (
        <div className="w-full">
          <CreatePost userData={userData} />
        </div>
      )}
    </>
  );
};

export default CreatePostInNewsFeed;
