import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Tips & Tricks Hub",
  description: "Master the ever-evolving world of technology.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Navbar></Navbar>

      {children}
    </div>
  );
};

export default RootLayout;
