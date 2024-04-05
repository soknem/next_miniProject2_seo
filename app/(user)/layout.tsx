import FooterComponent from "@/components/footer/FooterComponent"
import NavbarComponent from "@/components/navabar/NavbarComponent"
import "@/globals.css";
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen h-auto flex flex-col justify-between">
        <NavbarComponent/>
        {children}</body>
        <FooterComponent/>
    </html>
  )
}
