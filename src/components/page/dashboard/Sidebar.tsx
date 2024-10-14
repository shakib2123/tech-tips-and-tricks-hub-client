"use client";
import { Logo } from "@/assets/icons";
import ProfilePicture from "@/components/UI/ProfilePicture";
import {
  adminDashboardRoutes,
  protectedRoutes,
  userDashboardRoutes,
} from "@/constant/constant";
import { useUser } from "@/context/user.provider";

import { useGetCurrentUser } from "@/hooks/user.hook";
import { logout } from "@/services/AuthService";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoLockClosed } from "react-icons/io5";
import SidebarMobile from "./SidebarMobile";
const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { data: userData, isPending } = useGetCurrentUser();
  const { setIsLoading: userLoading } = useUser();

  const handleLogout = () => {
    logout();
    userLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <>
      <SidebarMobile />
      <section className="bg-slate-200 w-72 h-screen fixed top-0 p-4 lg:flex flex-col justify-between hidden">
        <div>
          {/* logo */}
          <div className="border-b border-gray-500 pb-2">
            <Link className="flex justify-start items-center gap-1" href="/">
              <Logo />
              <p className="font-bold md:text-lg text-inherit">
                Tech Tips & Tricks Hub
              </p>
            </Link>
          </div>

          {/* routes */}
          <div className="py-4 space-y-2">
            {userData?.data?.role === "USER"
              ? userDashboardRoutes?.map((route) => (
                  <div
                    key={route.path}
                    className={`w-full p-4  duration-100 transition-all font-medium rounded-lg flex items-center gap-2 ${
                      pathname === route.path
                        ? "bg-primary-100 text-primary"
                        : "hover:bg-slate-100 hover:text-primary-500"
                    }`}
                  >
                    {route.icon}{" "}
                    <Link href={route.path} className="w-full h-full">
                      {route.name}
                    </Link>
                  </div>
                ))
              : adminDashboardRoutes?.map((route) => (
                  <div
                    key={route.path}
                    className={`w-full p-4  duration-100 transition-all font-medium rounded-lg flex items-center gap-2 ${
                      pathname === route.path
                        ? "bg-primary-100 text-primary"
                        : "hover:bg-slate-100 hover:text-primary-500"
                    }`}
                  >
                    {route.icon}{" "}
                    <Link href={route.path} className="w-full h-full">
                      {route.name}
                    </Link>
                  </div>
                ))}
          </div>
        </div>

        <div className=" py-4 border-t border-gray-500 space-y-3">
          <div className="w-full flex gap-2 items-center">
            <ProfilePicture src={userData?.data?.profilePhoto} />
            <div>
              <h3 className="text-medium">{userData?.data?.name}</h3>
              <p className="text-sm text-gray-500">{userData?.data?.email}</p>
            </div>
          </div>
          <div
            onClick={handleLogout}
            className={`w-full p-4  duration-100 transition-all font-medium rounded-lg flex items-center gap-2 hover:bg-slate-100`}
          >
            <IoLockClosed size={20} />
            <p className="font-medium text-gray-600">Logout</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;