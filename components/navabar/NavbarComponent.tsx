"use client";
import Link from "next/link";
import { customTheme } from "../customize/CustomFlowbiteThemeComponent";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
} from "flowbite-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MenuList } from "./MenuList";
type menuType = {
  name: string;
  path: string;
  active: boolean;
};
function NavbarComponent() {
  const pathName = usePathname();
  const [menu, setMenu] = useState<menuType[]>(MenuList);
  const updateMenuList = (path: string) => {
    const newMenu = menu.map((item) => {
      if (path === item.path) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });
    setMenu(newMenu);
  };
  return (
    <Navbar theme={customTheme.navbar} className="sticky top-0 z-50">
      <NavbarBrand as={Link} href="/">
        <img
          src="https://store.istad.co/media/product_images/shool_logo3.png"
          className="mr-3 h-6 sm:h-9 text-2xl"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold tracking-widest">
          ESA Store
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {menu.map((item, index) => (
          <NavbarLink
            key={index}
            onClick={() => updateMenuList(item.path)}
            as={Link}
            href={item.path}
            active={item.active}
            className="text-xl"
          >
            {item.name}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}
export default NavbarComponent;
