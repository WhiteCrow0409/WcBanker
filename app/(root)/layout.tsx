import MobileNav from "@/components/MobileNav";
import SidebarSite from "@/components/Sidebar";
import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName:'WhiteCrow',LastName:'Arrow'};
  return (
    <main className="flex h-screen w-full font-inter">
        <SidebarSite user={loggedIn}/>

      <div className="flex size-full flex-col">
        <div className="root-layout">
        < Image src="/icons/logob.png" width={30} height={30} alt="menu icon"/>
        <div>
          < MobileNav user = {loggedIn}/>
        </div>
        </div>
        {children}
      </div>
    </main>
  );
}
