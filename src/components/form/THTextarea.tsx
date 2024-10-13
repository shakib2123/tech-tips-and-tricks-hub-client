import { IInput } from "@/types";
import { Textarea } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface IProps extends IInput {
  type?: string;
}

export default function THTextarea({
  name,
  label,
  required = false,
  variant = "bordered",
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Textarea
      {...register(name)}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!!errors[name]}
      required={required}
      label={label}
      minRows={6}
      variant={variant}
    />
  );
}
