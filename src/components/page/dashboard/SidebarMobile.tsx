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
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoLockClosed } from "react-icons/io5";

const SidebarMobile = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { data: userData } = useGetCurrentUser();
  const { setIsLoading: userLoading } = useUser();

  const handleLogout = () => {
    logout();
    userLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <div>
      <NextUINavbar
        maxWidth="xl"
        position="sticky"
        className="bg-black lg:hidden"
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <Link className="flex justify-start items-center gap-1" href="/">
              <Logo />
              <p className="font-bold md:text-lg text-inherit text-white">
                Tech Tips & Tricks Hub
              </p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="basis-1 pl-4 text-gray-100" justify="end">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu className="bg-slate-200/70 text-gray-900">
          <div className="h-full flex flex-col justify-between">
            {/* routes */}
            <div className="py-4 space-y-2">
              {userData?.data?.role === "ADMIN" &&
                adminDashboardRoutes?.map((route) => (
                  <Link key={route.path} href={route.path}>
                    <div
                      key={route.path}
                      className={`w-full p-4  duration-100 transition-all font-medium rounded-lg flex items-center gap-2 ${
                        pathname === route.path
                          ? "bg-primary-100 text-primary"
                          : "hover:bg-slate-100 hover:text-primary-500"
                      }`}
                    >
                      {route.icon} {route.name}
                    </div>
                  </Link>
                ))}
              {userData?.data?.role === "USER" &&
                userDashboardRoutes?.map((route) => (
                  <Link key={route.path} href={route.path}>
                    <div
                      className={`w-full p-4  duration-100 transition-all font-medium rounded-lg flex items-center gap-2 ${
                        pathname === route.path
                          ? "bg-primary-100 text-primary"
                          : "hover:bg-slate-100 hover:text-primary-500"
                      }`}
                    >
                      {route.icon} {route.name}
                    </div>
                  </Link>
                ))}
            </div>

            <div className=" py-4 border-t border-gray-500 space-y-3">
              <div className="w-full flex gap-2 items-center">
                <ProfilePicture src={userData?.data?.profilePhoto} />
                <div>
                  <h3 className="text-medium">{userData?.data?.name}</h3>
                  <p className="text-sm text-gray-500">
                    {userData?.data?.email}
                  </p>
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
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </div>
  );
};

export default SidebarMobile;
