"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Newspaper,
  Bookmark,
  Bot,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
  LogOut,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "News Feed",
    href: "/dashboard/news",
    icon: Newspaper,
  },
  {
    title: "Bookmarks",
    href: "/dashboard/bookmarks",
    icon: Bookmark,
  },
  {
    title: "AI Assistant",
    href: "/dashboard/assistant",
    icon: Bot,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];
export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "hidden border-r border-border bg-background transition-all duration-300 lg:flex lg:flex-col",
        collapsed ? "w-24" : "w-72"
      )}
    >
      {/* Logo */}

      <div className="flex h-20 items-center justify-between border-b border-border px-5">

        <Link
          href="/dashboard"
          className="flex items-center gap-3"
        >
          <Image
            src="/newsnaut-logo.png"
            alt="NewsNaut"
            width={160}
            height={40}
            className={cn(
              "transition-all duration-300",
              collapsed && "hidden"
            )}
          />

          {collapsed && (
            <Image
              src="/icon.png"
              alt="NewsNaut"
              width={40}
              height={40}
            />
          )}
        </Link>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-xl p-2 transition hover:bg-muted"
        >
          {collapsed ? (
            <PanelLeftOpen className="h-5 w-5" />
          ) : (
            <PanelLeftClose className="h-5 w-5" />
          )}
        </button>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4 py-8">

        <p
          className={cn(
            "mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
            collapsed && "hidden"
          )}
        >
          Navigation
        </p>

        <div className="space-y-2">

          {navigation.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300",

                  active
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary",

                  collapsed && "justify-center px-0"
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />

                {!collapsed && (
                  <span>{item.title}</span>
                )}
              </Link>
            );
          })}

        </div>

      </nav>

      {/* Bottom */}

      <div className="border-t border-border p-5">

        <div
          className={cn(
            "flex items-center gap-3",
            collapsed && "justify-center"
          )}
        >
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
            }}
          />

          {!collapsed && (
            <div>

              <h4 className="text-sm font-semibold">
                Welcome 👋
              </h4>

              <p className="text-xs text-muted-foreground">
                Manage your account
              </p>

            </div>
          )}

        </div>

        {!collapsed && (
          <button
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-border py-2 text-sm font-medium transition hover:bg-muted"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        )}

      </div>

    </aside>
  );
}