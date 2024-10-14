import { uploadImagesToImgbb } from "@/services/ImageBBService";
import { ChangeEvent, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const UpdateModal = () => {
  const [imageFiles, setImageFiles] = useState<File[] | null>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);

  const { handleSubmit, control } = useForm();

  //   const { mutate: createPost, isPending } = useCreatePost();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const imageUrls = await uploadImagesToImgbb(imageFiles!);
      const postData = {
        ...data,
        isPremium: data.isPremium ? true : false,
        userId: userData._id,
        userEmail: userData.email,
        images: imageUrls,
      };

      //   createPost(postData);
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    if (imageFiles!.length >= 4) {
      return toast.message("You can only upload a maximum of 4 images");
    }

    setImageFiles((prev) => [...(prev ?? []), file]);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>This is UpdateModal component</h1>
    </div>
  );
};

export default UpdateModal;
