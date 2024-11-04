import envConfig from "@/config/envConfig";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

const RealTimeEditor = ({
  control,
  name,
  defaultValue = "",
}: {
  control?: any;
  name?: string;
  defaultValue?: string;
}) => {
  return (
    <div className="w-full">
      <Controller
        control={control}
        name={name || "description"}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            apiKey={envConfig.tinymce_api_key}
            init={{
              branding: false,
              placeholder: "Type here...",
              height: 230,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "preview",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | ",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
};

export default RealTimeEditor;
