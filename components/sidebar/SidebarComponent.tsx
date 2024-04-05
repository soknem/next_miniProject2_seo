"use client";

import { Sidebar } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { MenuList } from "./menuList";
import { customTheme } from "../customize/CustomFlowbiteThemeComponent";
type MenuItem = {
  name: string;
  path: string;
  icon: React.ElementType;
};
export default function SideComponent() {
  const [menuList, setMenuList] = useState<MenuItem[]>(MenuList);
  return (
    <Sidebar theme={customTheme.sidebar} aria-label="Sidebar with logo branding example">
      <Sidebar.Logo href="#" img="https://store.istad.co/media/product_images/shool_logo3.png" imgAlt="Flowbite logo">
        EXStore
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
        {menuList.map((item, index) => (
            <Sidebar.Item key={index} as={Link} href={item.path} icon={item.icon}>
              {item.name}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

