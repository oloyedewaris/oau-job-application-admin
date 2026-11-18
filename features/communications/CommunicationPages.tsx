import Link from "next/link";
import { CheckCircle2, Download, FileUp, Mail, Plus, RotateCcw, Send, UploadCloud, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input, Select, Textarea } from "@/components/ui/input";
import { PageHeader } from "@/components/shared/PageHeader";
import { PortalShell } from "@/components/shared/PortalShell";

const candidates = [
  ["JOB/2026/18426","Adeola Adebayo","adeola.adebayo@example.com","Lecturer I","Verified"],
  ["JOB/2026/17102","Chidi Nwosu","chidi.nwosu@example.com","Lecturer II","Verified"],
  ["JOB/2026/16983","Maryam Bello","maryam.bello@example.com","Medical Officer II","Pending"],
  ["JOB/2026/15226","Kunle Ajayi","kunle.ajayi@example.com","Technologist II","Verified"],
];

function NotificationTabs() {
  return <div className="flex w-fit gap-1 rounded-xl border border-slate-200 bg-white p-1 text-xs font-semibold"><Link href="/notifications" className="rounded-lg bg-oau-blue px-4 py-2 text-white">Compose</Link><Link href="/notifications/history" className="rounded-lg px-4 py-2 text-slate-600 hover:bg-slate-50">Delivery history</Link></div>;
}

export function CandidatesPage() {
  return <PortalShell><PageHeader eyebrow="Post-assessment workflow" title="Successful candidates" description="Validate Application IDs and email addresses submitted by Deans and Directors before official communication." actions={<><Button variant="outline"><UploadCloud className="size-4" /> Upload CSV</Button><Button><Plus className="size-4" /> Add candidates</Button></>} />
    <Card><CardHeader className="border-b border-slate-100 pb-5"><h2 className="font-bold">Validate submitted list</h2><p className="mt-1 text-xs text-slate-500">Paste one Application ID or email address per line. Records are matched against the application database.</p></CardHeader><CardContent className="grid gap-4 lg:grid-cols-[1fr_260px]"><Textarea rows={5} placeholder={"JOB/2026/18426\nadeola.adebayo@example.com"} /><div className="rounded-xl border border-slate-200 p-4"><p className="text-xs font-bold">Validation summary</p><div className="mt-4 space-y-3 text-xs"><div className="flex justify-between"><span className="text-slate-500">Records entered</span><strong>0</strong></div><div className="flex justify-between"><span className="text-slate-500">Valid matches</span><strong className="text-emerald-700">0</strong></div><div className="flex justify-between"><span className="text-slate-500">Duplicates</span><strong>0</strong></div></div><Button className="mt-5 w-full">Validate records</Button></div></CardContent></Card>
    <Card className="overflow-hidden"><CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 pb-5"><div><h2 className="font-bold">Candidate register</h2><p className="mt-1 text-xs text-slate-500">582 candidates submitted by reviewers</p></div><Button size="sm" variant="outline"><Download className="size-4" /> Export</Button></CardHeader><div className="overflow-x-auto"><table className="w-full min-w-[800px] text-left text-xs"><thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-400"><tr>{["Application ID","Candidate","Email","Position","Validation",""].map(x=><th key={x} className="px-5 py-3">{x}</th>)}</tr></thead><tbody className="divide-y divide-slate-100">{candidates.map(r=><tr key={r[0]}><td className="px-5 py-4 font-bold text-oau-blue">{r[0]}</td><td className="px-5 py-4 font-semibold">{r[1]}</td><td className="px-5 py-4 text-slate-500">{r[2]}</td><td className="px-5 py-4">{r[3]}</td><td className="px-5 py-4"><Badge tone={r[4]==="Verified"?"green":"amber"}>{r[4]}</Badge></td><td className="px-5 py-4"><Button size="sm" variant="ghost">Remove</Button></td></tr>)}</tbody></table></div></Card>
  </PortalShell>;
}

export function NotificationsPage() {
  return <PortalShell><PageHeader eyebrow="Bulk communication" title="Email notifications" description="Compose examination, interview and appointment notices for validated candidates." actions={<NotificationTabs />} />
    <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
      <Card><CardHeader className="border-b border-slate-100 pb-5"><h2 className="font-bold">Compose message</h2></CardHeader><CardContent className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2"><label className="text-xs font-semibold">Notification type<Select className="mt-2 w-full"><option>Examination invitation</option><option>Interview invitation</option><option>Appointment offer</option><option>Custom message</option></Select></label><label className="text-xs font-semibold">Template<Select className="mt-2 w-full"><option>2026 Examination Invitation</option><option>Blank template</option></Select></label></div>
        <label className="block text-xs font-semibold">Subject<Input className="mt-2" defaultValue="Invitation to OAU Recruitment Examination  2026" /></label>
        <label className="block text-xs font-semibold">Message body<Textarea className="mt-2 min-h-64" defaultValue={"Dear {{first_name}},\n\nFollowing the review of your application for {{position}}, you are invited to participate in the next stage of the recruitment exercise.\n\nExamination date: {{event_date}}\nVenue: {{venue}}\n\nRegards,\nThe Registry\nObafemi Awolowo University"} /></label>
        <div className="flex flex-wrap justify-end gap-2"><Button variant="outline">Save draft</Button><Button><Send className="size-4" /> Review and send</Button></div>
      </CardContent></Card>
      <div className="space-y-6">
        <Card><CardHeader><h2 className="font-bold">Recipients</h2></CardHeader><CardContent className="space-y-3 pt-4"><button className="flex w-full items-center gap-3 rounded-xl border-2 border-oau-blue bg-indigo-50 p-4 text-left"><CheckCircle2 className="size-5 text-oau-blue" /><span><span className="block text-xs font-bold">Validated candidates</span><span className="text-[11px] text-slate-500">582 recipients</span></span></button><button className="flex w-full items-center gap-3 rounded-xl border border-slate-200 p-4 text-left"><FileUp className="size-5 text-slate-500" /><span><span className="block text-xs font-bold">Upload CSV</span><span className="text-[11px] text-slate-500">Application IDs or emails</span></span></button><button className="flex w-full items-center gap-3 rounded-xl border border-slate-200 p-4 text-left"><Mail className="size-5 text-slate-500" /><span><span className="block text-xs font-bold">Enter recipients</span><span className="text-[11px] text-slate-500">Paste IDs or addresses</span></span></button></CardContent></Card>
        <Card><CardHeader><h2 className="font-bold">Send checks</h2></CardHeader><CardContent className="space-y-3 pt-4 text-xs">{["All recipients validated","No duplicate recipients","Institutional sender connected"].map(x=><div key={x} className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="size-4 text-emerald-600" />{x}</div>)}</CardContent></Card>
      </div>
    </div>
  </PortalShell>;
}

const deliveries = [
  ["Examination invitation","360","356","4","18 Nov 2026, 10:12","Completed"],
  ["Interview invitation","128","128","0","16 Nov 2026, 14:30","Completed"],
  ["Appointment offer","42","40","2","12 Nov 2026, 09:04","Completed"],
  ["Test message","5","5","0","11 Nov 2026, 16:45","Completed"],
];

export function NotificationHistoryPage() {
  return <PortalShell><PageHeader eyebrow="Bulk communication" title="Delivery history" description="Monitor email batches, delivery results and failed messages that require retry." actions={<NotificationTabs />} />
    <div className="grid gap-4 sm:grid-cols-3">{[["Messages sent","534",Send],["Delivered","529",CheckCircle2],["Failed","5",XCircle]].map(([a,b,Icon],i)=><Card key={String(a)}><CardContent className="flex items-center justify-between p-5"><div><p className="text-xs text-slate-500">{a as string}</p><p className="mt-1 text-2xl font-bold">{b as string}</p></div><Icon className={`size-5 ${i===2?"text-red-600":"text-emerald-600"}`} /></CardContent></Card>)}</div>
    <Card className="overflow-hidden"><div className="overflow-x-auto"><table className="w-full min-w-[850px] text-left text-xs"><thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-400"><tr>{["Batch","Recipients","Delivered","Failed","Sent","Status",""].map(x=><th key={x} className="px-5 py-3">{x}</th>)}</tr></thead><tbody className="divide-y divide-slate-100">{deliveries.map((r,i)=><tr key={r[0]}><td className="px-5 py-4"><p className="font-bold">{r[0]}</p><p className="text-[10px] text-slate-400">MAIL-2026-{104-i}</p></td><td className="px-5 py-4">{r[1]}</td><td className="px-5 py-4 font-semibold text-emerald-700">{r[2]}</td><td className="px-5 py-4 font-semibold text-red-600">{r[3]}</td><td className="px-5 py-4 text-slate-500">{r[4]}</td><td className="px-5 py-4"><Badge tone="green">{r[5]}</Badge></td><td className="px-5 py-4"><Button size="sm" variant="outline">{r[3]!=="0"&&<RotateCcw className="size-3.5" />} Details</Button></td></tr>)}</tbody></table></div></Card>
  </PortalShell>;
}
