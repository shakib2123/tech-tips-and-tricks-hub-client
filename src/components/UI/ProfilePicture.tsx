import Image from "next/image";

const ProfilePicture = ({
  src,
  size = "size-12",
}: {
  src: string;
  size?: string;
}) => {
  return (
    <div className={size}>
      <Image
        src={src}
        alt="profile photo"
        width={100}
        height={100}
        className="rounded-full object-cover size-full "
      />
    </div>
  );
};

export default ProfilePicture;
