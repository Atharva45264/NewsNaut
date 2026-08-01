"use client";

import { Bell, CalendarDays, Menu, Search } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

export function Topbar() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">

      <div className="flex h-20 items-center justify-between px-6 lg:px-8">

        {/* Left */}

        <div className="flex items-center gap-4">

          {/* Mobile Menu */}

          <button className="rounded-xl border border-border p-2 transition hover:bg-muted lg:hidden">
            <Menu className="h-5 w-5" />
          </button>

          <div>

            <h1 className="text-2xl font-semibold tracking-tight">
              Dashboard
            </h1>

            <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">

              <CalendarDays className="h-4 w-4" />

              <span>{today}</span>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          {/* Search */}

          <div className="relative hidden md:block">

            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <input
              type="text"
              placeholder="Search news, topics, sources..."
              className="
                h-11
                w-80
                rounded-2xl
                border
                border-border
                bg-background
                pl-11
                pr-4
                text-sm
                outline-none
                transition
                focus:border-primary
                focus:ring-4
                focus:ring-primary/10
              "
            />

          </div>

          {/* Notifications */}

          <button
            className="
              relative
              rounded-2xl
              border
              border-border
              p-3
              transition
              hover:bg-primary/10
            "
          >

            <Bell className="h-5 w-5" />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-primary ring-2 ring-background" />

          </button>

          {/* User */}

          <UserButton
  appearance={{
    elements: {
      avatarBox: "h-11 w-11",
    },
  }}
/>

        </div>

      </div>

    </header>
  );
}