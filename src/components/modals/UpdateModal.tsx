import { categories } from "@/constant/constant";
import { uploadImagesToImgbb } from "@/services/ImageBBService";
import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Select,
  SelectItem,
  Spinner,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";
import RealTimeEditor from "../shared/RealTimeEditor";
import THForm from "../form/THForm";
import { IUser } from "@/types";
import { useGetPost, useUpdatePost } from "@/hooks/post.hook";
import { FaRegEdit } from "react-icons/fa";

const UpdateModal = ({
  userData,
  postId,
}: {
  userData: IUser;
  postId: string;
}) => {
  const [imageFiles, setImageFiles] = useState<File[] | null>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);
  const [isFetchData, setIsFetchData] = useState(false);

  const { handleSubmit, control } = useForm();

  const { data: post, refetch } = useGetPost(postId);
  const postInfo = post?.data;

  useEffect(() => {
    refetch();
  }, [postId, refetch, isFetchData]);

  const {
    mutate: updatePost,
    isPending: isUpdatePending,
    isSuccess: isUpdateSuccess,
  } = useUpdatePost();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const imageUrls = await uploadImagesToImgbb(imageFiles!);
      const postData = {
        description: data?.description
          ? data?.description
          : postInfo?.description,
        category: data?.category ? data?.category : postInfo?.category,
        isPremium: data?.isPremium ? false : false,
        userId: userData?._id,
        userEmail: userData?.email,
        images: imageUrls.length > 0 ? imageUrls : postInfo?.images,
      };

      const updatedData = {
        postId,
        postData,
      };

      updatePost(updatedData);
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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (isUpdateSuccess) {
      setImageFiles([]);
      setImagePreviews([]);
      setIsFetchData(false);
    }
  }, [isUpdateSuccess]);

  return (
    <>
      <Button
        onClick={() => setIsFetchData(!isFetchData)}
        size="sm"
        color="primary"
        variant="shadow"
        onPress={onOpen}
      >
        <FaRegEdit className="text-lg" />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        className="text-gray-900"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Update post</ModalHeader>
          <ModalBody>
            <div className="overflow-y-auto overflow-x-hidden">
              <THForm onSubmit={handleSubmit(onSubmit)}>
                <RealTimeEditor
                  defaultValue={postInfo?.description}
                  control={control}
                />

                <div className="flex flex-col gap-2 mt-2">
                  <Controller
                    name="isPremium"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        defaultValue={postInfo?.isPremium}
                        isRequired={true}
                        {...field}
                      >
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
                        isRequired={true}
                        defaultSelectedKeys={[postInfo?.category]}
                      >
                        {categories.map((category) => (
                          <SelectItem
                            className="text-gray-700"
                            key={category.key}
                          >
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
                      />
                    </label>
                  </div>
                </div>
                {imagePreviews?.length > 0 ? (
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
                ) : (
                  <div className="flex gap-1 md:gap-3 my-2 flex-wrap">
                    {postInfo?.images?.map((imageDataUrl: string) => (
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
                  {isUpdatePending ? <Spinner size="sm" /> : "Update now"}
                </Button>
              </THForm>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateModal;
