import Sidebar from "@/components/page/dashboard/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Tips & Tricks Hub - Dashboard",
  description: "Master the ever-evolving world of technology.",
};

const UserLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="bg-white text-gray-900">
      <Sidebar />
      {children}
    </section>
  );
};

export default UserLayout;
