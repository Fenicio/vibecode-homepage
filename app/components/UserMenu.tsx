"use client";
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "../app/components/ui/dropdown-menu";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle
} from "../app/components/ui/dialog";
import { Github } from "./icons/Github";

interface UserMenuProps {
  absolute?: boolean;
}

export default function UserMenu({ absolute = true }: UserMenuProps) {
  const { data: session } = useSession();
  return (
    <div className={absolute ? "absolute right-4 top-4 z-20" : "relative z-10"}>
      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center space-x-2 focus:outline-none">
              {/* User avatar or initials */}
              {session.user?.image ? (
                <img src={session.user.image} alt="avatar" className="w-8 h-8 rounded-full" />
              ) : (
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">
                  {session.user?.name?.[0] || session.user?.email?.[0] || "?"}
                </div>
              )}
              <span className="text-sm text-gray-700">{session.user?.name || session.user?.email || "User"}</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link href="/success-story-create" legacyBehavior passHref>
              <DropdownMenuItem asChild>
                <a className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Tell my story
                </a>
              </DropdownMenuItem>
            </Link>
            <Separator className="my-1" />
            <DropdownMenuItem onClick={() => signOut()}>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Dialog>
          <DialogTrigger asChild>
            <Button>Sign In</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Sign In</DialogTitle>
            </DialogHeader>
            <div className='m-24 w-full'>
              <Button onClick={() => signIn("github")}> 
                <span className="mr-2"><Github width={20} height={20} /></span>
                Sign In with Github
              </Button>
            </div>
            <DialogFooter className="flex-col sm:flex-col justify-start items-start">
              <p className="text-xs text-muted-foreground">You will be redirected to Github to sign in.</p>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
