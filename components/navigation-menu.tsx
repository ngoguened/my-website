'use client'

import Link from "next/link"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Home, Mail, User, Settings, LogOut } from "lucide-react"
import { useState } from "react"

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Menubar className="fixed top-0 left-0 right-0 z-50 rounded-none border-b px-2 lg:px-4 bg-background">
        <MenubarMenu>
          <Link href="/" passHref>
            <MenubarTrigger
              className="font-bold relative group"
              onClick={handleLinkClick}
            >
              <span className="relative">
                Home
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 origin-center transition-transform group-hover:scale-x-100"></span>
              </span>
            </MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href="/links" passHref>
            <MenubarTrigger
              className="relative font-bold group"
              onClick={handleLinkClick}
            >
              <span className="relative">
                Links
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 origin-center transition-transform group-hover:scale-x-100"></span>
              </span>
            </MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href="/contact" passHref>
            <MenubarTrigger
              className="relative font-bold group"
              onClick={handleLinkClick}
            >
              <span className="relative">
                Contact
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 origin-center transition-transform group-hover:scale-x-100"></span>
              </span>
            </MenubarTrigger>
          </Link>
        </MenubarMenu>
      </Menubar>
      <div className="h-16"></div> {/* Spacer to prevent content from being hidden under the fixed navbar */}
    </>
  )
}