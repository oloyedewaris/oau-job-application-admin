import Link from "next/link";
import { ArrowLeft, CheckCircle2, Download, ExternalLink, Mail, UserCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PortalShell } from "@/components/shared/PortalShell";

const documents = [
  ["Curriculum Vitae","curriculum-vitae.pdf","Verified"],
  ["Ph.D. Certificate","phd-certificate.pdf","Verified"],
  ["NYSC Discharge Certificate","nysc-certificate.pdf","Verified"],
  ["Birth Certificate","birth-certificate.pdf","Verified"],
  ["Professional Certification","Not provided","Missing"],
];

export function ApplicationDetailPage({ id }: { id: string }) {
  return (
    <PortalShell>
      <div><Link href="/applications" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-oau-blue"><ArrowLeft className="size-4" /> Back to applications</Link><div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="flex flex-wrap items-center gap-2"><h1 className="text-2xl font-bold text-slate-950">Adeola Adebayo</h1><Badge tone="green">Complete  Awaiting human review</Badge></div><p className="mt-1 text-sm text-slate-500">Application JOB/2026/{id} � Lecturer I, Computer Science & Engineering</p></div><div className="flex gap-2"><Button variant="outline"><Download className="size-4" /> Download summary</Button><Button><UserCheck className="size-4" /> Add to successful candidates</Button></div></div></div>
      <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <Card><CardHeader className="border-b border-slate-100 pb-4"><h2 className="font-bold">Applicant information</h2></CardHeader><CardContent className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{[["Full name","Adeola Temitope Adebayo"],["Email","adeola.adebayo@example.com"],["Phone","+234 803 555 0142"],["Gender","Female"],["State of origin","Osun"],["Application date","18 November 2026"]].map(([a,b])=><div key={a}><p className="text-[11px] text-slate-400">{a}</p><p className="mt-1 text-xs font-semibold text-slate-800">{b}</p></div>)}</CardContent></Card>
          <Card><CardHeader className="border-b border-slate-100 pb-4"><h2 className="font-bold">Qualifications and experience</h2></CardHeader><CardContent className="space-y-5"><div className="rounded-xl border border-slate-200 p-4"><div className="flex justify-between gap-3"><div><p className="text-sm font-bold text-slate-900">Ph.D. Computer Science</p><p className="mt-1 text-xs text-slate-500">Obafemi Awolowo University � 2021</p></div><Badge tone="green">Highest qualification</Badge></div></div><div className="rounded-xl border border-slate-200 p-4"><p className="text-sm font-bold text-slate-900">Lecturer II</p><p className="mt-1 text-xs text-slate-500">Federal University of Technology, Akure � 2021Present</p></div></CardContent></Card>
          <Card className="overflow-hidden"><CardHeader className="border-b border-slate-100 pb-4"><h2 className="font-bold">Submitted documents</h2></CardHeader><div className="divide-y divide-slate-100">{documents.map(([name,file,status])=><div key={name} className="flex items-center gap-4 px-6 py-4"><div className={`grid size-9 place-items-center rounded-lg ${status==="Verified"?"bg-emerald-50 text-emerald-700":"bg-amber-50 text-amber-700"}`}>{status==="Verified"?<CheckCircle2 className="size-4" />:<ExternalLink className="size-4" />}</div><div className="min-w-0 flex-1"><p className="text-xs font-semibold text-slate-800">{name}</p><p className="mt-0.5 truncate text-[11px] text-slate-400">{file}</p></div><Badge tone={status==="Verified"?"green":"amber"}>{status}</Badge>{status==="Verified"&&<Button size="sm" variant="ghost"><ExternalLink className="size-3.5" /> Open</Button>}</div>)}</div></Card>
        </div>
        <div className="space-y-6">
          <Card><CardHeader><h2 className="font-bold">Screening result</h2></CardHeader><CardContent className="pt-4"><div className="grid place-items-center rounded-xl bg-emerald-50 py-6 text-center"><CheckCircle2 className="size-8 text-emerald-600" /><p className="mt-2 text-sm font-bold text-emerald-800">Completeness passed</p><p className="mt-1 text-[11px] text-emerald-700">4 of 5 mandatory routes satisfied</p></div><dl className="mt-5 space-y-3 text-xs">{[["Ruleset","Lecturer I / Academic"],["Batch","SCR-2026-011"],["Screened","18 Nov, 09:42 AM"],["Alternative route","Applied"]].map(([a,b])=><div key={a} className="flex justify-between gap-3"><dt className="text-slate-500">{a}</dt><dd className="font-semibold text-slate-800">{b}</dd></div>)}</dl></CardContent></Card>
          <Card><CardHeader><h2 className="font-bold">Assigned reviewer</h2></CardHeader><CardContent className="pt-4"><div className="flex items-center gap-3"><div className="grid size-10 place-items-center rounded-full bg-indigo-50 text-xs font-bold text-oau-blue">AO</div><div><p className="text-xs font-bold">Prof. A. Ogunleye</p><p className="text-[11px] text-slate-500">Dean, Faculty of Technology</p></div></div><Button variant="outline" className="mt-4 w-full"><Mail className="size-4" /> Contact reviewer</Button></CardContent></Card>
        </div>
      </div>
    </PortalShell>
  );
}
