import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import { ReactNode } from "react";

interface IProps {
  buttonText: string | ReactNode;
  buttonSize?: "sm" | "md" | "lg";
  buttonColor?:
    | "default"
    | "danger"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | undefined;
  title: string;
  children: ReactNode;
  buttonVariant?:
    | "light"
    | "solid"
    | "bordered"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined;
  buttonClassName?: string;
  isDismissable?: boolean;
}

export default function THModal({
  buttonText,
  buttonSize = "md",
  buttonColor = "default",
  title,
  children,
  buttonVariant = "solid",
  buttonClassName,
  isDismissable = true,
}: IProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        size={buttonSize}
        color={buttonColor}
        className={buttonClassName}
        variant={buttonVariant}
        onPress={onOpen}
      >
        {buttonText}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={isDismissable}
        className="text-gray-900"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
