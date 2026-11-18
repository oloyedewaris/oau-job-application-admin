import Link from "next/link";
import { Download, FileSpreadsheet, Search, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Select } from "@/components/ui/input";
import { PageHeader } from "@/components/shared/PageHeader";
import { PortalShell } from "@/components/shared/PortalShell";

const rows = [
  ["JOB/2026/18426","Adeola Adebayo","Lecturer I","Computer Science","Complete","18 Nov 2026"],
  ["JOB/2026/18425","Chinedu Okafor","Senior Assistant Registrar","Registry","Incomplete","18 Nov 2026"],
  ["JOB/2026/18424","Fatima Ibrahim","Medical Officer II","Health Centre","Complete","18 Nov 2026"],
  ["JOB/2026/18423","Tolu Akinwale","Technologist II","Chemical Engineering","Pending","18 Nov 2026"],
  ["JOB/2026/18422","Mariam Yusuf","Assistant Lecturer","English","Complete","17 Nov 2026"],
];

export function ApplicationsPage() {
  return (
    <PortalShell>
      <PageHeader eyebrow="Application records" title="Applications" description="Search, filter and export applicant records with their screening status and document links." actions={<><Button variant="outline"><FileSpreadsheet className="size-4" /> Export CSV</Button><Button><Download className="size-4" /> Export Excel</Button></>} />
      <Card className="p-4"><div className="grid gap-3 md:grid-cols-[1fr_190px_190px_auto]"><div className="relative"><Search className="absolute left-3 top-3 size-4 text-slate-400" /><Input className="pl-9" placeholder="Search name, application ID or email" /></div><Select><option>All screening statuses</option><option>Complete</option><option>Incomplete</option><option>Pending</option></Select><Select><option>All position categories</option><option>Academic</option><option>Non-teaching</option></Select><Button variant="outline"><SlidersHorizontal className="size-4" /> More filters</Button></div></Card>
      <div className="grid gap-3 sm:grid-cols-3">{[["All applications","25,438"],["Awaiting human review","18,926"],["Missing requirements","6,512"]].map(([a,b])=><Card key={a} className="p-4"><p className="text-xs text-slate-500">{a}</p><p className="mt-1 text-xl font-bold text-slate-950">{b}</p></Card>)}</div>
      <Card className="overflow-hidden"><div className="overflow-x-auto"><table className="w-full min-w-[900px] text-left text-xs"><thead className="border-b border-slate-100 bg-slate-50 text-[10px] uppercase tracking-wider text-slate-400"><tr>{["Application ID","Applicant","Position","Faculty / Unit","Screening","Submitted",""].map(x=><th key={x} className="px-5 py-3 font-semibold">{x}</th>)}</tr></thead><tbody className="divide-y divide-slate-100">{rows.map(row=><tr key={row[0]} className="hover:bg-slate-50"><td className="px-5 py-4 font-bold text-oau-blue">{row[0]}</td><td className="px-5 py-4 font-semibold text-slate-900">{row[1]}</td><td className="px-5 py-4">{row[2]}</td><td className="px-5 py-4 text-slate-500">{row[3]}</td><td className="px-5 py-4"><Badge tone={row[4]==="Complete"?"green":row[4]==="Incomplete"?"amber":"slate"}>{row[4]}</Badge></td><td className="px-5 py-4 text-slate-500">{row[5]}</td><td className="px-5 py-4"><Link href={`/applications/${row[0].split("/").pop()}`} className="font-semibold text-oau-blue hover:underline">View record</Link></td></tr>)}</tbody></table></div><div className="flex items-center justify-between border-t border-slate-100 px-5 py-4 text-xs text-slate-500"><span>Showing 15 of 25,438</span><div className="flex gap-2"><Button size="sm" variant="outline">Previous</Button><Button size="sm" variant="outline">Next</Button></div></div></Card>
    </PortalShell>
  );
}
