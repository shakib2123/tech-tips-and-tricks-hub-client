import { IUser } from "@/types";
import THModal from "./THModal";
import RealTimeEditor from "../shared/RealTimeEditor";
import THForm from "../form/THForm";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  Button,
  Checkbox,
  Select,
  SelectItem,
  Spinner,
} from "@nextui-org/react";
import { categories } from "@/constant/constant";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { uploadImagesToImgbb } from "@/services/ImageBBService";
import { useCreatePost } from "@/hooks/post.hook";

const PostModal = ({ userData }: { userData: IUser }) => {
  const [imageFiles, setImageFiles] = useState<File[] | null>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);

  const { handleSubmit, control } = useForm();

  const { mutate: createPost, isPending } = useCreatePost();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const imageUrls = await uploadImagesToImgbb(imageFiles!);
      console.log("All uploaded image URLs:", imageUrls);

      const postData = {
        ...data,
        isPremium: data.isPremium ? true : false,
        userId: userData._id,
        images: imageUrls,
      };

      console.log(postData);

      createPost(postData);
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    if (imageFiles!.length >= 4) {
      return toast.message("You can only upload a maximum of 4 images");
    }

    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <THModal
      buttonClassName="flex-1 w-full"
      buttonText="Post now"
      title="Create a post"
      isDismissable={false}
    >
      <div className="overflow-y-auto overflow-x-hidden">
        <THForm onSubmit={handleSubmit(onSubmit)}>
          <RealTimeEditor control={control} />

          <div className="flex flex-col gap-2 mt-2">
            <Controller
              name="isPremium"
              control={control}
              render={({ field }) => (
                <Checkbox required {...field}>
                  <span className="text-gray-800">Premium</span>
                </Checkbox>
              )}
            />
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  label="Category"
                  placeholder="Select a category"
                  className="max-w-full"
                  onChange={(e) => field.onChange(e)}
                  required
                >
                  {categories.map((category) => (
                    <SelectItem className="text-gray-700" key={category.key}>
                      {category.name}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />

            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="postImage"
                className="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200"
              >
                <div className="flex flex-col items-center justify-center pt-3 pb-4">
                  <svg
                    className="w-8 h-8 mb-1 text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-1 text-sm text-gray-600">
                    <span className="font-semibold">Click to upload</span>
                  </p>
                </div>
                <input
                  onChange={(e) => handleImageChange(e)}
                  multiple
                  id="postImage"
                  type="file"
                  className="hidden"
                  name="postImages"
                  required
                />
              </label>
            </div>
          </div>
          {imagePreviews?.length > 0 && (
            <div className="flex gap-1 md:gap-3 my-2 flex-wrap">
              {imagePreviews?.map((imageDataUrl) => (
                <div
                  key={imageDataUrl}
                  className="relative size-14 md:size-20 rounded-xl border-2 border-dashed border-default-300 p-0.5 md:p-1"
                >
                  <Image
                    height={100}
                    width={100}
                    alt="item"
                    className="h-full w-full object-cover object-center rounded-md"
                    src={imageDataUrl}
                  />
                </div>
              ))}
            </div>
          )}

          <Button className="w-full flex-1 mt-2" size="lg" type="submit">
            {isPending ? <Spinner size="sm" /> : "Post now"}
          </Button>
        </THForm>
      </div>
    </THModal>
  );
};

export default PostModal;
