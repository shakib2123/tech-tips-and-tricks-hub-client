import { IUser } from "@/types";
import PostModal from "../modals/PostModal";
import ProfilePicture from "../UI/ProfilePicture";

const CreatePost = ({ userData }: { userData: IUser }) => {
  return (
    <section className="rounded-xl bg-slate-200 h-24 w-full p-4 flex gap-4 justify-center items-center text-gray-900">
      <ProfilePicture src={userData?.profilePhoto} />
      <PostModal userData={userData} />
    </section>
  );
};

export default CreatePost;
