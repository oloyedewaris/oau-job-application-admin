"use client";

import { Download, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AdminLayout } from "@/layouts/AdminLayout";
import { cn } from "@/lib/utils";
import { stats } from "./dashboard.data";
import { DashboardPanels } from "./DashboardPanels";

const statTones: Record<string, string> = {
  blue: "bg-blue-50 text-blue-700",
  green: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
  violet: "bg-violet-50 text-violet-700",
};

export function DashboardPage() {
  return (
    <AdminLayout>
      <div className="mx-auto max-w-[1600px] space-y-6 p-4 sm:p-6 lg:p-8">
        <div className="animate-enter flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-oau-blue">Recruitment 2026</p>
            <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-[28px]">Overview</h1>
            <p className="mt-1 text-sm text-slate-500">Monitor screening progress and recruitment activity across OAU.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline"><Download className="size-4" /> Export report</Button>
            <Button><Play className="size-4 fill-current" /> Start screening</Button>
          </div>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Recruitment summary">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="animate-enter overflow-hidden" style={{ animationDelay: `${index * 55}ms` }}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="truncate text-xs font-medium text-slate-500">{stat.label}</p>
                    <p className="mt-2 text-2xl font-bold tracking-tight text-slate-950">{stat.value}</p>
                  </div>
                  <div className={cn("grid size-10 place-items-center rounded-xl", statTones[stat.tone])}>
                    <stat.icon className="size-[19px]" strokeWidth={1.8} />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] text-slate-500">
                  {stat.trend === "up" && <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 font-bold text-emerald-700">+5.0%</span>}
                  <span>{stat.detail}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
        <DashboardPanels />
      </div>
    </AdminLayout>
  );
}
