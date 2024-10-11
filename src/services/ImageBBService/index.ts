import envConfig from "@/config/envConfig";
import axios from "axios";

const apiKey = envConfig.imagebb_api_key;
const imgbbUploadURL = `https://api.imgbb.com/1/upload?key=${apiKey}`;

export const uploadImagesToImgbb = async (images: File[]) => {
  const promises = images.map(async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(imgbbUploadURL, formData);
      return response.data.data.url;
    } catch (error) {
      throw new Error(error.message || "Something went wrong");
    }
  });

  try {
    const imageUrls = await Promise.all(promises);

    return imageUrls;
  } catch (error) {
    throw new Error(error.message || "Something went wrong");
  }
};
