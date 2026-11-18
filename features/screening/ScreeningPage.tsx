import { AlertTriangle, CheckCircle2, Clock3, FileSearch, Play, RefreshCw, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/PageHeader";
import { PortalShell } from "@/components/shared/PortalShell";

const batches = [
  ["SCR-2026-011", "All positions", "25,438", "Completed", "18 Nov 2026, 09:31", "Adekunle Oladimeji"],
  ["SCR-2026-010", "Academic positions", "14,280", "Completed", "17 Nov 2026, 14:12", "Kemi Adesina"],
  ["SCR-2026-009", "Non-teaching positions", "11,158", "Completed", "17 Nov 2026, 10:04", "Adekunle Oladimeji"],
];

export function ScreeningPage() {
  return (
    <PortalShell>
      <PageHeader eyebrow="Document screening" title="Automated screening" description="Run completeness checks against approved position requirements and inspect every screening batch." actions={<><Button variant="outline"><RefreshCw className="size-4" /> Refresh status</Button><Button><Play className="size-4 fill-current" /> Start screening</Button></>} />
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Current status", "Ready", "Last run completed with no errors", CheckCircle2, "text-emerald-700 bg-emerald-50"],
          ["Applications queued", "1,204", "New submissions since last run", Clock3, "text-blue-700 bg-blue-50"],
          ["Requirement rules", "126", "Across 84 active positions", FileSearch, "text-violet-700 bg-violet-50"],
        ].map(([label,value,detail,Icon,tone]) => (
          <Card key={String(label)}><CardContent className="flex items-start justify-between gap-4 p-5"><div><p className="text-xs text-slate-500">{label as string}</p><p className="mt-2 text-2xl font-bold text-slate-950">{value as string}</p><p className="mt-2 text-[11px] text-slate-500">{detail as string}</p></div><div className={`grid size-10 place-items-center rounded-xl ${tone as string}`}><Icon className="size-5" /></div></CardContent></Card>
        ))}
      </div>
      <Card>
        <CardHeader className="border-b border-slate-100 pb-5"><h2 className="font-bold text-slate-900">Screening control</h2><p className="mt-1 text-xs text-slate-500">Choose the application scope and confirm the ruleset before starting a new batch.</p></CardHeader>
        <CardContent className="grid gap-5 lg:grid-cols-[1fr_1fr_auto]">
          <label className="text-xs font-semibold text-slate-700">Application scope<select className="mt-2 h-10 w-full rounded-lg border border-slate-200 bg-white px-3 font-normal"><option>All submitted applications</option><option>Academic positions only</option><option>Non-teaching positions only</option></select></label>
          <label className="text-xs font-semibold text-slate-700">Requirements file<select className="mt-2 h-10 w-full rounded-lg border border-slate-200 bg-white px-3 font-normal"><option>OAU_2026_Job_Requirements_Analysis.json</option></select></label>
          <div className="flex items-end"><Button className="w-full lg:w-auto"><Play className="size-4" /> Initiate screening</Button></div>
          <div className="lg:col-span-3 flex gap-3 rounded-xl border border-amber-100 bg-amber-50 p-4 text-xs leading-5 text-amber-800"><AlertTriangle className="size-4 shrink-0" />Starting a new run checks new and modified submissions. Existing results remain in the audit history.</div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden">
        <CardHeader className="border-b border-slate-100 pb-5"><h2 className="font-bold text-slate-900">Screening history</h2></CardHeader>
        <div className="overflow-x-auto"><table className="w-full min-w-[850px] text-left text-xs"><thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-400"><tr>{["Batch ID","Scope","Processed","Status","Started","Initiated by",""].map(x=><th key={x} className="px-5 py-3 font-semibold">{x}</th>)}</tr></thead><tbody className="divide-y divide-slate-100">{batches.map(row=><tr key={row[0]} className="hover:bg-slate-50"><td className="px-5 py-4 font-bold text-oau-blue">{row[0]}</td><td className="px-5 py-4">{row[1]}</td><td className="px-5 py-4 font-semibold">{row[2]}</td><td className="px-5 py-4"><Badge tone="green">{row[3]}</Badge></td><td className="px-5 py-4 text-slate-500">{row[4]}</td><td className="px-5 py-4">{row[5]}</td><td className="px-5 py-4"><Button size="sm" variant="ghost"><RotateCcw className="size-3.5" /> Details</Button></td></tr>)}</tbody></table></div>
      </Card>
    </PortalShell>
  );
}
