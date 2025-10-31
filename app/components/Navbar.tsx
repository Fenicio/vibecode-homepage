"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Link from "next/link";
import { ToggleTheme } from "./toogle-theme";
import UserMenu from "./UserMenu";
import { Separator } from "@radix-ui/react-separator";

const routeList = [
  { href: "/success-stories", label: "Success Stories" },
  { href: "/tools", label: "Tools" },
  { href: "/glossary", label: "Glossary" },
  { href: "/community", label: "Community" },
];


export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="backdrop-blur-sm bg-opacity-95 w-full top-0 mx-auto sticky z-40 rounded-2xl flex justify-between items-center p-2 bg-card border-b">
      <Link href="/" className="font-bold text-xl flex items-center gap-2 px-2">
        <span className="text-2xl">⚡</span>
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          VibeCode
        </span>
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center gap-2 lg:hidden">
        <ToggleTheme />
        <UserMenu absolute={false} />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center gap-2">
                  <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      VibeCode
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="group flex flex-1 list-none items-center justify-center space-x-1">
                <NavigationMenu>
                  <NavigationMenuList className="flex flex-col w-full">
                    {routeList.map(({ href, label }) => (
                      <NavigationMenuItem key={href}>
                        <NavigationMenuLink
                          asChild
                          onClick={() => setIsOpen(false)}
                          className="justify-start text-base w-full px-4 py-2 hover:bg-accent rounded"
                        >
                          <Link href={href}>{label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
        {routeList.map(({ href, label }) => (
          <NavigationMenuItem key={href}>

              <NavigationMenuLink  asChild>
                <Link href={href} className="text-base px-4 py-2 hover:bg-accent rounded-md transition-colors">
                  {label}
                </Link>
              </NavigationMenuLink>

          </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex items-center gap-3">
        <ToggleTheme />
        <UserMenu absolute={false} />
      </div>
    </header>
  );
};
