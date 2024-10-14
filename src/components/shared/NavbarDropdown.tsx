"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { usePathname, useRouter } from "next/navigation";
import { Avatar } from "@nextui-org/avatar";
import { useUser } from "@/context/user.provider";
import { logout } from "@/services/AuthService";

import { useGetCurrentUser } from "@/hooks/user.hook";
import Link from "next/link";
import { protectedRoutes } from "@/constant/constant";

export default function NavbarDropdown() {
  const router = useRouter();

  const pathname = usePathname();

  const { data: userData } = useGetCurrentUser();

  const user = userData?.data || {};

  const { setIsLoading: userLoading } = useUser();

  const handleLogout = () => {
    logout();
    userLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  const userRole = user?.role === "USER" ? "user" : "admin";

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" src={user?.profilePhoto} />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        className="text-gray-900 hover:text-gray-700"
      >
        <DropdownItem className="w-full">
          <Link href={`/profile`} className="w-full">
            Profile
          </Link>
        </DropdownItem>
        <DropdownItem className="w-full">
          <Link href={`/${userRole}/dashboard`} className="w-full">
            Dashboard
          </Link>
        </DropdownItem>
        <DropdownItem
          onClick={() => handleLogout()}
          key="delete"
          className="text-danger"
          color="danger"
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
