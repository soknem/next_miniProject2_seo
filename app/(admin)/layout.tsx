'use client'
import "@/globals.css";
import SidebarComponent from "@/components/sidebar/SidebarComponent";
import { useState } from "react";
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const[isShow,setIsShow]=useState<Boolean>(false);

  return (
    
    <html>
      <body className="bg-gray-200 flex">
        <aside className="h-screen sticky top-0 ">
          <SidebarComponent/>
        </aside>
        <main className="flex-1"> {children}</main>
      </body>
    </html>
  );
}
