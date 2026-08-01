import { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex min-h-screen flex-1 flex-col">

        <Topbar />

        <main className="flex-1 overflow-y-auto bg-muted/20 p-6 lg:p-8">
          {children}
        </main>

      </div>

    </div>
  );
}