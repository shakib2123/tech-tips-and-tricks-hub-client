"use client";
import {
  Button,
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import Link from "next/link";

import NavbarDropdown from "./NavbarDropdown";
import { Logo } from "@/assets/icons";
import { useUser } from "@/context/user.provider";
import { logout } from "@/services/AuthService";

import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/constant/constant";

export default function Navbar() {
  const router = useRouter();

  const pathname = usePathname();

  const { user, setIsLoading: userLoading } = useUser();

  const handleLogout = () => {
    logout();
    userLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  const userRole = user?.role === "USER" ? "user" : "admin";

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="bg-black">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold md:text-lg text-inherit">
              Tech Tips & Tricks Hub
            </p>
          </Link>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          <Link
            href="/"
            aria-current="page"
            className={
              pathname === "/"
                ? "text-primary border-b-2  border-primary duration-100 transition-colors hover:text-primary/90"
                : ""
            }
          >
            News Feed
          </Link>
          <Link
            href="/about-us"
            aria-current="page"
            className={
              pathname === "/about-us"
                ? "text-primary border-b-2  border-primary duration-100 transition-colors hover:text-primary/90"
                : ""
            }
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            aria-current="page"
            className={
              pathname === "/contact-us"
                ? "text-primary border-b-2  border-primary duration-100 transition-colors hover:text-primary/90"
                : ""
            }
          >
            Contact Us
          </Link>
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {user?.email ? (
          <NavbarItem className="hidden sm:flex gap-2">
            <NavbarDropdown />
          </NavbarItem>
        ) : (
          <NavbarItem className="hidden sm:flex gap-2">
            <Link href={"/login"}>
              <Button color="primary">Login</Button>
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-black/10 text-gray-900">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem>
            <Link href="/" className="w-full h-full">
              <Button
                color={pathname === "/" ? "primary" : "default"}
                className="w-full h-full"
              >
                News Feed
              </Button>
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link href="/profile" className="w-full h-full">
              <Button
                color={pathname === "/profile" ? "primary" : "default"}
                className="w-full h-full"
              >
                Profile
              </Button>
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link href={`${userRole}/dashboard`} className="w-full h-full">
              <Button
                color={
                  pathname === `${userRole}/dashboard` ? "primary" : "default"
                }
                className="w-full h-full"
              >
                Dashboard
              </Button>
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link
              href="/about-us"
              aria-current="page"
              className="w-full h-full"
            >
              <Button
                color={pathname === "/about-us" ? "primary" : "default"}
                className="w-full h-full"
              >
                About Us
              </Button>
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link
              href="/contact-us"
              aria-current="page"
              className="w-full h-full"
            >
              <Button
                color={pathname === "/contact-us" ? "primary" : "default"}
                className="w-full h-full"
              >
                Contact Us
              </Button>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button
              onClick={() => handleLogout()}
              className="text-gray-50 w-full"
              color="danger"
            >
              Logout
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
}
