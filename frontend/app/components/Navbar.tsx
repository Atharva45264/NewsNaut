"use client";

import Link from "next/link";
import { useUser, UserButton, SignInButton } from "@clerk/nextjs";

export default function Navbar() {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/70 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-white">
          📰 NewsNaut
        </Link>

        {isLoaded &&
          (isSignedIn ? (
            <UserButton />
          ) : (
            <SignInButton mode="redirect">
              <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Sign In
              </button>
            </SignInButton>
          ))}
      </div>
    </header>
  );
}