import { Button } from "@nextui-org/react";
import { FaDownload } from "react-icons/fa6";
import html2pdf from "html2pdf.js";

const DownloadPDF = () => {
  const handleOnClick = async () => {
    const postContent = document.getElementById("postContent");
    html2pdf(postContent);
  };

  return (
    <div>
      <Button onClick={handleOnClick}>
        <FaDownload className="text-xl" /> Download PDF
      </Button>
    </div>
  );
};

export default DownloadPDF;
