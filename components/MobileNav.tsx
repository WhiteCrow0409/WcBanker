'use client'

import{
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import React from 'react'
import Link from "next/link"
import { sidebarLinks } from "@/constants"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
const MobileNav = ({user}:MobileNavProps) => {
    const pathname = usePathname();
  return (
    <section className="w-full max max-w-[264px]"><Sheet>
    <SheetTrigger>
        <Image 
            src = "/icons/hamburger.svg"
            width={30}
            height={30}
            alt = "menu"
            className="curson-pointer"
        />
    </SheetTrigger>
    <SheetContent side="left" className="border-none  bg-white">
    <Link href="/" className=" cursor-pointer flex items-center gap-1 px-4">
          <Image 
            src="/icons/logo.svg" 
            width={34} 
            height={34} 
            alt="Logo" 
            className="size-14 max-xl:size-14"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Bankers</h1>
        </Link>
        <div className="mobilenav-sheet">
            <SheetClose asChild>
                <nav className="flex h-full flex-col gap-6 pt-16 text-chocolate">

               
        {sidebarLinks.map((item)=>
        { const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
            return (
                <SheetClose asChild key={item.route}>
                    
                
                <Link href={item.route} key = {item.label}
                className={cn('mobilenav-sheet_close w-full',{'!bg-bank-gradient':isActive})}>
                    
                        <Image 
                            src = {item.imgURL}
                            alt = {item.label}
                            width={20}
                            height={20}
                            className={cn({
                                'brightness-[4] invert-0':isActive
                            })}
                        />
                    
                    <p className={cn("text-16 font-semibold text-black-2",{
                        '!text-chocolate':isActive
                    })}>
                        {item.label}
                    </p>
                </Link>
                </SheetClose>
            )
        })}
        USER
         </nav>
            </SheetClose>
        
        FOOTER
        </div>
        

    </SheetContent>
  </Sheet>
  </section>
  )
}

export default MobileNav