import { Spinner } from "@nextui-org/spinner";

const Loading = () => {
  return (
    <div className="h-screen fixed inset-0 z-[999] bg-black/10 backdrop-blur-md flex items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
};

export default Loading;
