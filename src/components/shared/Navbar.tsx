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
// import { Cog } from "lucide-react";
import Link from "next/link";

import NavbarDropdown from "./NavbarDropdown";
import { Logo } from "@/assets/icons";

export default function Navbar() {
  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="bg-black">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold md:text-xl text-inherit">
              Tech Tips & Tricks Hub
            </p>
          </Link>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {/* {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))} */}
          <Link href="/" aria-current="page">
            Home
          </Link>
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {/* {user?.email ? ( */}
        {/* <NavbarItem className="hidden sm:flex gap-2">
          <NavbarDropdown />
        </NavbarItem> */}
        {/* ) : ( */}
        <NavbarItem className="hidden sm:flex gap-2">
          <Link href={"/login"}>
            <Button color="primary">Login</Button>
          </Link>
        </NavbarItem>
        {/* )} */}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-black/10">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {/* {siteConfig.navMenuItems.map((item, index) => ( */}
          <NavbarMenuItem
          // key={`${item}-${index}`}
          >
            <Link
              // color={
              //   index === 2
              //     ? "primary"
              //     : index === siteConfig.navMenuItems.length - 1
              //     ? "danger"
              //     : "foreground"
              // }
              href="#"
            >
              {/* {item.label} */} Customers
            </Link>
          </NavbarMenuItem>
          {/* ))} */}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
}
