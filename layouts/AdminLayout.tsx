"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, HelpCircle, Menu, Search, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigation, utilityNavigation } from "@/features/dashboard/dashboard.data";
import { useDashboard } from "@/features/dashboard/useDashboard";
import { cn } from "@/lib/utils";

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-oau-blue text-white shadow-sm shadow-indigo-950/20">
        <span className="text-sm font-black tracking-tight">OAU</span>
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-bold tracking-tight text-slate-950">Recruitment Portal</p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Administration</p>
      </div>
    </div>
  );
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-[76px] items-center border-b border-slate-200 px-5"><Brand /></div>
      <div className="flex-1 overflow-y-auto px-3 py-5">
        <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Workspace</p>
        <nav className="space-y-1" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "group flex h-10 w-full items-center gap-3 rounded-lg px-3 text-left text-sm font-medium transition-colors",
                active ? "bg-oau-blue text-white shadow-sm shadow-indigo-950/10" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
              )}
            >
              <item.icon className="size-[18px]" strokeWidth={1.8} />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className={cn("grid min-w-5 place-items-center rounded-full px-1.5 py-0.5 text-[10px] font-bold", active ? "bg-white/15 text-white" : "bg-indigo-50 text-oau-blue")}>
                  {item.badge}
                </span>
              )}
            </Link>
          )})}
        </nav>
        <div className="my-5 border-t border-slate-200" />
        <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">System</p>
        <nav className="space-y-1" aria-label="System navigation">
          {utilityNavigation.map((item) => (
            <Link key={item.label} href={item.href} onClick={onNavigate} className="flex h-10 w-full items-center gap-3 rounded-lg px-3 text-left text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950">
              <item.icon className="size-[18px]" strokeWidth={1.8} />{item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-slate-200 p-3">
        <button className="flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors hover:bg-slate-100">
          <div className="grid size-9 shrink-0 place-items-center rounded-full bg-indigo-100 text-xs font-bold text-oau-blue">AO</div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-slate-800">Adekunle Oladimeji</p>
            <p className="truncate text-[11px] text-slate-500">Superadmin</p>
          </div>
          <ChevronDown className="size-4 text-slate-400" />
        </button>
      </div>
    </div>
  );
}

export function AdminLayout({ children }: { children: ReactNode }) {
  const { isSidebarOpen, openSidebar, closeSidebar } = useDashboard();
  return (
    <div className="min-h-screen bg-[#f7f8fc]">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[248px] border-r border-slate-200 bg-white lg:block"><SidebarContent /></aside>
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button aria-label="Close navigation" className="absolute inset-0 bg-slate-950/30 backdrop-blur-[2px]" onClick={closeSidebar} />
          <aside className="relative h-full w-[280px] border-r border-slate-200 bg-white shadow-2xl">
            <button onClick={closeSidebar} aria-label="Close navigation" className="absolute right-3 top-5 z-10 grid size-9 place-items-center rounded-lg text-slate-500 hover:bg-slate-100"><X className="size-5" /></button>
            <SidebarContent onNavigate={closeSidebar} />
          </aside>
        </div>
      )}
      <div className="lg:pl-[248px]">
        <header className="sticky top-0 z-30 flex h-[76px] items-center border-b border-slate-200/90 bg-white/95 px-4 backdrop-blur-md sm:px-6 lg:px-8">
          <Button variant="ghost" size="icon" className="mr-2 lg:hidden" onClick={openSidebar} aria-label="Open navigation"><Menu className="size-5" /></Button>
          <div className="relative hidden w-full max-w-sm md:block">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <input aria-label="Search portal" placeholder="Search applications, reviewers..." className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50/70 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-300 focus:bg-white focus:ring-3 focus:ring-indigo-100" />
          </div>
          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <button className="hidden h-9 items-center gap-2 rounded-lg px-3 text-xs font-medium text-slate-500 hover:bg-slate-100 sm:flex"><HelpCircle className="size-4" /> Help centre</button>
            <button aria-label="System alerts" className="relative grid size-9 place-items-center rounded-lg text-slate-500 hover:bg-slate-100">
              <ShieldCheck className="size-[19px]" /><span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-red-500 ring-2 ring-white" />
            </button>
            <div className="ml-1 h-7 w-px bg-slate-200" />
            <div className="ml-1 grid size-9 place-items-center rounded-full bg-oau-blue text-xs font-bold text-white">AO</div>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
