import Sidebar from "@/components/page/dashboard/Sidebar";
import SidebarMobile from "@/components/page/dashboard/SidebarMobile";
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
      <SidebarMobile />

      <Sidebar />
      <div className="lg:ml-[290px]">{children}</div>
    </section>
  );
};

export default UserLayout;
