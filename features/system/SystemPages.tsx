import { Download, KeyRound, LockKeyhole, Mail, Save, Search, ShieldCheck, UserCog } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input, Select } from "@/components/ui/input";
import { PageHeader } from "@/components/shared/PageHeader";
import { PortalShell } from "@/components/shared/PortalShell";

const events = [
  ["Screening batch completed","Adekunle Oladimeji","Screening","SCR-2026-011 � 25,438 records","18 Nov 2026, 09:42"],
  ["Reviewer account created","Kemi Adesina","User management","Prof. A. Ogunleye","18 Nov 2026, 09:18"],
  ["Application export generated","Prof. A. Ogunleye","Export","Faculty of Technology � 1,826 records","18 Nov 2026, 08:54"],
  ["Email batch dispatched","Kemi Adesina","Notification","MAIL-2026-104 � 360 recipients","18 Nov 2026, 08:31"],
  ["Assignment updated","Adekunle Oladimeji","Assignment","Health Centre � Medical Officer II","17 Nov 2026, 16:20"],
];

export function ActivityPage() {
  return <PortalShell><PageHeader eyebrow="Accountability" title="Activity logs" description="A complete audit trail of screening, access, exports, assignments and communications." actions={<Button variant="outline"><Download className="size-4" /> Export logs</Button>} />
    <Card className="p-4"><div className="grid gap-3 md:grid-cols-[1fr_180px_180px]"><div className="relative"><Search className="absolute left-3 top-3 size-4 text-slate-400" /><Input className="pl-9" placeholder="Search user, action or reference" /></div><Select><option>All activity types</option><option>Screening</option><option>Export</option><option>Notification</option></Select><Select><option>Last 30 days</option><option>Today</option><option>Last 7 days</option></Select></div></Card>
    <Card className="overflow-hidden"><div className="overflow-x-auto"><table className="w-full min-w-[850px] text-left text-xs"><thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-400"><tr>{["Action","Performed by","Category","Details","Date and time"].map(x=><th key={x} className="px-5 py-3">{x}</th>)}</tr></thead><tbody className="divide-y divide-slate-100">{events.map(r=><tr key={r[0]}><td className="px-5 py-4 font-bold">{r[0]}</td><td className="px-5 py-4">{r[1]}</td><td className="px-5 py-4"><Badge tone="blue">{r[2]}</Badge></td><td className="px-5 py-4 text-slate-500">{r[3]}</td><td className="px-5 py-4 text-slate-500">{r[4]}</td></tr>)}</tbody></table></div></Card>
  </PortalShell>;
}

export function SettingsPage() {
  return <PortalShell><PageHeader eyebrow="System administration" title="Settings" description="Manage recruitment configuration, institutional email, access policies and administrator accounts." actions={<Button><Save className="size-4" /> Save changes</Button>} />
    <div className="grid gap-6 xl:grid-cols-[220px_1fr]">
      <Card className="h-fit p-2">{[["General",ShieldCheck],["Users & roles",UserCog],["Email service",Mail],["Security",LockKeyhole]].map(([a,Icon],i)=><button key={String(a)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs font-semibold ${i===0?"bg-oau-blue text-white":"text-slate-600 hover:bg-slate-50"}`}><Icon className="size-4" />{a as string}</button>)}</Card>
      <div className="space-y-6">
        <Card><CardHeader className="border-b border-slate-100 pb-5"><h2 className="font-bold">Recruitment cycle</h2><p className="mt-1 text-xs text-slate-500">General labels and approved screening requirements for this recruitment exercise.</p></CardHeader><CardContent className="grid gap-5 sm:grid-cols-2"><label className="text-xs font-semibold">Cycle name<Input className="mt-2" defaultValue="OAU Recruitment 2026" /></label><label className="text-xs font-semibold">Cycle status<Select className="mt-2 w-full"><option>Active</option><option>Closed</option></Select></label><label className="text-xs font-semibold sm:col-span-2">Requirements ruleset<Input className="mt-2" defaultValue="OAU_2026_Job_Requirements_Analysis.json" /></label></CardContent></Card>
        <Card><CardHeader className="border-b border-slate-100 pb-5"><h2 className="font-bold">Access and permissions</h2><p className="mt-1 text-xs text-slate-500">Default permissions remain role-scoped and can be reviewed before backend integration.</p></CardHeader><CardContent className="space-y-4">{[["Superadmin","Full configuration, permissions and administrative access"],["Recruitment Administrator","Screening, reviewers, assignments, exports and bulk notifications"],["Dean / Director","Assigned complete applications and secure exports only"]].map(([a,b])=><div key={a} className="flex items-center gap-4 rounded-xl border border-slate-200 p-4"><div className="grid size-9 place-items-center rounded-lg bg-indigo-50 text-oau-blue"><KeyRound className="size-4" /></div><div className="flex-1"><p className="text-xs font-bold">{a}</p><p className="mt-1 text-[11px] text-slate-500">{b}</p></div><Button size="sm" variant="outline">Review</Button></div>)}</CardContent></Card>
      </div>
    </div>
  </PortalShell>;
}
