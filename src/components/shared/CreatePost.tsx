import { IUser } from "@/types";
import PostModal from "../modals/PostModal";
import Image from "next/image";

const CreatePost = ({ userData }: { userData: IUser }) => {
  console.log(userData);
  return (
    <section className="rounded-xl bg-slate-200 h-24 w-full p-4 flex gap-4 justify-center items-center text-gray-900">
      <div className="size-12">
        <Image
          src={userData?.profilePhoto}
          alt="profile photo"
          width={100}
          height={100}
          className="rounded-full object-cover size-full "
        />
      </div>
      <PostModal userData={userData} />
    </section>
  );
};

export default CreatePost;
