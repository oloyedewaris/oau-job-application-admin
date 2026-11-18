import {
  ArrowRight, Check, ChevronRight, CircleAlert, MoreHorizontal,
  Plus, RefreshCw, SlidersHorizontal, Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  activities, missingRequirements, recentApplications, screeningBreakdown,
} from "./dashboard.data";

const activityTones: Record<string, string> = {
  green: "bg-emerald-500 ring-emerald-100",
  blue: "bg-blue-500 ring-blue-100",
  violet: "bg-violet-500 ring-violet-100",
};

function ScreeningPanel() {
  return (
    <Card className="animate-enter overflow-hidden" style={{ animationDelay: "220ms" }}>
      <CardHeader className="flex flex-row items-start justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="font-bold text-slate-900">Automated screening</h2>
            <Badge tone="green" className="gap-1.5"><span className="size-1.5 rounded-full bg-emerald-500" /> Completed</Badge>
          </div>
          <p className="mt-1 text-xs text-slate-500">Last run today at 09:42 AM by Adekunle Oladimeji</p>
        </div>
        <button aria-label="Screening options" className="grid size-8 place-items-center rounded-lg text-slate-400 hover:bg-slate-100"><MoreHorizontal className="size-5" /></button>
      </CardHeader>
      <CardContent className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_240px]">
        <div>
          <div className="rounded-xl border border-indigo-100 bg-[linear-gradient(135deg,#f4f5ff_0%,#fafaff_65%,#fff8dd_100%)] p-5">
            <div className="flex items-start gap-4">
              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-oau-blue text-white shadow-sm"><Sparkles className="size-5" /></div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-slate-900">25,438 applications screened</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">All submitted applications were checked against the approved 2026 position requirements.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button size="sm"><RefreshCw className="size-3.5" /> Run new screening</Button>
                  <Button variant="outline" size="sm">View execution log</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 space-y-4">
            {screeningBreakdown.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-600">{item.label}</span>
                  <span className="font-semibold text-slate-900">{item.value.toLocaleString()} <span className="font-normal text-slate-400">({item.percent}%)</span></span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className={cn("h-full rounded-full", item.color)} style={{ width: `${item.percent}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="text-xs font-bold text-slate-900">Execution summary</p>
          <dl className="mt-4 space-y-3.5">
            {[["Batch ID", "SCR-2026-011"], ["Started", "09:31 AM"], ["Duration", "11m 24s"], ["Processing rate", "37 apps/sec"], ["Errors", "0"]].map(([term, value]) => (
              <div key={term} className="flex items-center justify-between gap-3 text-xs"><dt className="text-slate-500">{term}</dt><dd className="font-semibold text-slate-800">{value}</dd></div>
            ))}
          </dl>
          <div className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-50 p-2.5 text-[11px] font-medium text-emerald-700"><Check className="size-3.5" /> All checks completed successfully</div>
        </div>
      </CardContent>
    </Card>
  );
}

function MissingRequirements() {
  return (
    <Card className="animate-enter" style={{ animationDelay: "270ms" }}>
      <CardHeader className="flex flex-row items-start justify-between gap-3">
        <div><h2 className="font-bold text-slate-900">Missing requirements</h2><p className="mt-1 text-xs text-slate-500">Top issues across incomplete applications</p></div>
        <Button variant="ghost" size="sm" className="-mr-2 text-oau-blue">View all <ChevronRight className="size-3.5" /></Button>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-5">
          {missingRequirements.map((item, index) => (
            <div key={item.label}>
              <div className="mb-2 flex items-center gap-3">
                <span className="grid size-6 place-items-center rounded-md bg-slate-100 text-[10px] font-bold text-slate-500">{index + 1}</span>
                <span className="min-w-0 flex-1 truncate text-xs font-medium text-slate-700">{item.label}</span>
                <span className="text-xs font-bold text-slate-900">{item.count.toLocaleString()}</span>
              </div>
              <div className="ml-9 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-amber-400" style={{ width: `${item.percent}%` }} /></div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-amber-100 bg-amber-50/70 p-3">
          <CircleAlert className="mt-0.5 size-4 shrink-0 text-amber-600" />
          <p className="text-[11px] leading-4 text-amber-800">1,183 applicants are missing more than one mandatory requirement.</p>
        </div>
      </CardContent>
    </Card>
  );
}

function ApplicationsTable() {
  return (
    <Card className="animate-enter overflow-hidden" style={{ animationDelay: "320ms" }}>
      <CardHeader className="flex flex-row items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div><h2 className="font-bold text-slate-900">Recent applications</h2><p className="mt-1 text-xs text-slate-500">Latest submissions entering the screening queue</p></div>
        <Button variant="outline" size="sm"><SlidersHorizontal className="size-3.5" /> Filter</Button>
      </CardHeader>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left">
          <thead><tr className="border-b border-slate-100 bg-slate-50/60 text-[10px] uppercase tracking-[0.08em] text-slate-400">
            <th className="px-6 py-3 font-semibold">Applicant</th><th className="px-4 py-3 font-semibold">Position / Unit</th><th className="px-4 py-3 font-semibold">Status</th><th className="px-4 py-3 font-semibold">Received</th><th className="px-5 py-3" />
          </tr></thead>
          <tbody className="divide-y divide-slate-100">
            {recentApplications.map((application) => (
              <tr key={application.id} className="group transition-colors hover:bg-slate-50/70">
                <td className="px-6 py-4"><div className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-indigo-50 text-[11px] font-bold text-oau-blue">{application.initials}</span>
                  <div><p className="text-xs font-semibold text-slate-900">{application.name}</p><p className="mt-0.5 text-[10px] font-medium text-slate-400">{application.id}</p></div>
                </div></td>
                <td className="px-4 py-4"><p className="text-xs font-medium text-slate-700">{application.position}</p><p className="mt-0.5 text-[10px] text-slate-400">{application.unit}</p></td>
                <td className="px-4 py-4"><Badge tone={application.status === "Complete" ? "green" : application.status === "Incomplete" ? "amber" : "slate"}>{application.status}</Badge></td>
                <td className="px-4 py-4 text-xs text-slate-500">{application.time}</td>
                <td className="px-5 py-4 text-right"><button aria-label={`View ${application.name}`} className="grid size-8 place-items-center rounded-lg text-slate-400 opacity-0 transition group-hover:bg-white group-hover:opacity-100"><ChevronRight className="size-4" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-slate-100 px-6 py-3 text-center"><button className="inline-flex items-center gap-1.5 text-xs font-semibold text-oau-blue hover:underline">View all applications <ArrowRight className="size-3.5" /></button></div>
    </Card>
  );
}

function ActivityPanel() {
  return (
    <Card className="animate-enter" style={{ animationDelay: "370ms" }}>
      <CardHeader className="flex flex-row items-center justify-between gap-3">
        <div><h2 className="font-bold text-slate-900">Recent activity</h2><p className="mt-1 text-xs text-slate-500">System and administrator actions</p></div>
        <button aria-label="Activity options" className="grid size-8 place-items-center rounded-lg text-slate-400 hover:bg-slate-100"><MoreHorizontal className="size-5" /></button>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="relative space-y-6 before:absolute before:bottom-3 before:left-[5px] before:top-3 before:w-px before:bg-slate-200">
          {activities.map((activity) => (
            <div key={activity.title} className="relative flex gap-4">
              <span className={cn("relative z-10 mt-1 size-[11px] shrink-0 rounded-full ring-4", activityTones[activity.tone])} />
              <div><p className="text-xs font-semibold text-slate-800">{activity.title}</p><p className="mt-1 text-[11px] leading-4 text-slate-500">{activity.description}</p><p className="mt-1.5 text-[10px] text-slate-400">{activity.time}</p></div>
            </div>
          ))}
        </div>
        <div className="mt-7 border-t border-slate-100 pt-4"><Button variant="soft" className="w-full"><Plus className="size-4" /> Invite a reviewer</Button></div>
      </CardContent>
    </Card>
  );
}

export function DashboardPanels() {
  return (
    <>
      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]"><ScreeningPanel /><MissingRequirements /></section>
      <section className="grid gap-6 xl:grid-cols-[1.6fr_0.8fr]"><ApplicationsTable /><ActivityPanel /></section>
    </>
  );
}
