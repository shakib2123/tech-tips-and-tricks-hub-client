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
    <section className="bg-white">
      <Navbar></Navbar>
      {children}
    </section>
  );
};

export default RootLayout;
