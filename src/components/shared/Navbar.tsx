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

import NextLink from "next/link";
import NavbarDropdown from "./NavbarDropdown";

export default function Navbar() {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            {/* <Logo /> */}
            <p className="font-bold text-inherit">ACME</p>
          </NextLink>
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
          <NextLink href="#" aria-current="page">
            Customers
          </NextLink>
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {/* {user?.email ? ( */}
        <NavbarItem className="hidden sm:flex gap-2">
          <NavbarDropdown />
        </NavbarItem>
        {/* ) : (
          <NavbarItem className="hidden sm:flex gap-2">
            <Button onClick={() => router.push("/login")}>Login</Button>
          </NavbarItem>
        )} */}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
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
