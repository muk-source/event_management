import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { NavItems } from "./NavItems";
import { MobileNav } from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex justify-between items-center">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            alt="Event verse LOGO"
            width={128}
            height={38}
          />
        </Link>
        <SignedIn>
          <nav className="hidden md:flex justify-between items-center w-full max-w-xs">
            <NavItems/>
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end">
          <SignedIn>
            <UserButton afterSignOutUrl="/"></UserButton>
            <MobileNav/>
          </SignedIn>
          <SignedOut>
            <Button className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
