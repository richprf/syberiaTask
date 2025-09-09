"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleTheme } from "@/redux/slices/global";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Skeleton,
} from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxBell } from "react-icons/rx";
import { Home, LucideIcon } from "lucide-react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { BsFillCaretLeftFill } from "react-icons/bs"

type Nvlink = {
  label: string;
  href: string;
  icons: LucideIcon;
  index: number;
};
const DashboardHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

;


  const menuItems: Nvlink[] = [
    { label: "داشبورد", icons: Home, href: "/dashboard", index: 1 },
    { label: "اطلاعات کاربری", icons: Home, href: "/reserve", index: 2 },
    { label: "مدیریت املاک", icons: Home, href: "/mod", index: 3 },
    {
      label: "مدیریت رزرو",
      icons: Home,
      href: "/dashbdfdoard",
      index: 4,
    },
    {
      label: "مدیریت مالی",
      icons: Home,
      href: "/dashbfdsdsoard",
      index: 5,
    },
    {
      label: "مدیریت نظرات",
      icons: Home,
      href: "/dashsfsdboard",
      index: 6,
    },
    { label: "اعلان ها", icons: Home, href: "/dashasasboard", index: 7 },
  ];
  return (
    <Navbar
      classNames={{
        base: "px-7 lg:px-14 dark:bg-dark-300",
        wrapper: "px-0 max-w-full",
      }}
      maxWidth="full"
      className="w-full rounded-[12px]"
    >
      <NavbarContent justify="start" className="hidden lg:flex">
        <NavbarItem className="flex gap-2">
          داشبورد         <div className="flex items-center gap-1 pl-5">
          <BsFillCaretLeftFill size={14} className="opacity-30" />
          <BsFillCaretLeftFill size={18} className="opacity-60" />
          <BsFillCaretLeftFill size={23} className="opacity-100" />
        </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">

        <NavbarItem className="border-r-2 pr-3 border-[#9c9c9c]">
          {" "}
          <RxBell />
        </NavbarItem>
        <NavbarItem className="flex gap-2 ">
          <Skeleton className="w-[37px] h-[37px] rounded-[8px]" />
          <div>
            <p className="font-normal text-[14px]"> سبحان برار </p>
            <p className="text-[12px] text-[#888888]">فروشنده </p>
          </div>

        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className=" rounded-[12px] p-[19px]">
        {menuItems.map(({ label, href, icons: Icon, index }) => {
          const isActive = pathName === href;
          return (
            <NavbarMenuItem key={`${label}-${index}`}>
              <Link
                className={clsx(
                  "w-full flex gap-2 py-3 pr-2 rounded-[12px]",
                  isActive ? "bg-blue-600 " : ""
                )}
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={href}
              >
                <Icon
                  size={18}
                  className={clsx(
                    isActive
                      ? "dark:text-white text-black z-10"
                      : "text-gray-500 group-hover:text-lime-400 z-10"
                  )}
                />
                {label}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default DashboardHeader;
