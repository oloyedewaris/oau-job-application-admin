import { Building2, Download, Mail, Plus, Search, ShieldCheck, UserCheck, UsersRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input, Select } from "@/components/ui/input";
import { PageHeader } from "@/components/shared/PageHeader";
import { PortalShell } from "@/components/shared/PortalShell";

const reviewers = [
  ["Prof. A. Ogunleye","Dean","Faculty of Technology","6 positions","Active"],
  ["Prof. B. Fashina","Dean","Faculty of Arts","8 positions","Active"],
  ["Dr. M. O. Adeyemi","Director","Health Centre","3 positions","Pending"],
  ["Mrs. K. Aluko","Director","Physical Planning","4 positions","Active"],
  ["Prof. T. Akinyemi","Dean","Faculty of Science","11 positions","Inactive"],
];

export function ReviewersPage() {
  return <PortalShell><PageHeader eyebrow="Access management" title="Reviewers" description="Register Faculty Deans and Directors, manage account status and review their coverage." actions={<Button><Plus className="size-4" /> Register reviewer</Button>} />
    <div className="grid gap-4 sm:grid-cols-3">{[["Total reviewers","48",UsersRound],["Active accounts","42",UserCheck],["Pending invitations","6",Mail]].map(([a,b,Icon])=><Card key={String(a)}><CardContent className="flex items-center justify-between p-5"><div><p className="text-xs text-slate-500">{a as string}</p><p className="mt-1 text-2xl font-bold">{b as string}</p></div><div className="grid size-10 place-items-center rounded-xl bg-indigo-50 text-oau-blue"><Icon className="size-5" /></div></CardContent></Card>)}</div>
    <Card className="p-4"><div className="grid gap-3 md:grid-cols-[1fr_180px_180px]"><div className="relative"><Search className="absolute left-3 top-3 size-4 text-slate-400" /><Input className="pl-9" placeholder="Search reviewer name or email" /></div><Select><option>All reviewer roles</option><option>Dean</option><option>Director</option></Select><Select><option>All account statuses</option><option>Active</option><option>Pending</option><option>Inactive</option></Select></div></Card>
    <Card className="overflow-hidden"><div className="overflow-x-auto"><table className="w-full min-w-[800px] text-left text-xs"><thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-400"><tr>{["Reviewer","Role","Responsibility","Coverage","Account",""].map(x=><th key={x} className="px-5 py-3">{x}</th>)}</tr></thead><tbody className="divide-y divide-slate-100">{reviewers.map((r,i)=><tr key={r[0]} className="hover:bg-slate-50"><td className="px-5 py-4"><p className="font-bold text-slate-900">{r[0]}</p><p className="mt-0.5 text-[10px] text-slate-400">reviewer{i+1}@oauife.edu.ng</p></td><td className="px-5 py-4">{r[1]}</td><td className="px-5 py-4">{r[2]}</td><td className="px-5 py-4">{r[3]}</td><td className="px-5 py-4"><Badge tone={r[4]==="Active"?"green":r[4]==="Pending"?"amber":"slate"}>{r[4]}</Badge></td><td className="px-5 py-4"><Button size="sm" variant="outline">Manage</Button></td></tr>)}</tbody></table></div></Card>
  </PortalShell>;
}

const assignments = [
  ["Prof. A. Ogunleye","Faculty of Technology","Computer Science, Chemical Engineering","6","1,826"],
  ["Prof. B. Fashina","Faculty of Arts","English, History, Linguistics","8","2,104"],
  ["Dr. M. O. Adeyemi","Health Centre","Medical Officer, Nursing Officer","3","643"],
  ["Mrs. K. Aluko","Physical Planning","Technical and Works positions","4","518"],
];

export function AssignmentsPage() {
  return <PortalShell><PageHeader eyebrow="Reviewer coverage" title="Assignments" description="Assign reviewers to Faculties, Departments, Units or individual job positions." actions={<Button><Plus className="size-4" /> New assignment</Button>} />
    <Card><CardHeader className="border-b border-slate-100 pb-5"><h2 className="font-bold">Create assignment</h2><p className="mt-1 text-xs text-slate-500">A reviewer only sees applications matching assigned responsibilities.</p></CardHeader><CardContent className="grid gap-4 md:grid-cols-2 xl:grid-cols-5"><label className="text-xs font-semibold">Reviewer<Select className="mt-2 w-full"><option>Select reviewer</option><option>Prof. A. Ogunleye</option></Select></label><label className="text-xs font-semibold">Assignment type<Select className="mt-2 w-full"><option>Faculty</option><option>Department</option><option>Unit</option><option>Job position</option></Select></label><label className="text-xs font-semibold">Faculty / Unit<Select className="mt-2 w-full"><option>Select scope</option><option>Faculty of Technology</option></Select></label><label className="text-xs font-semibold">Position<Select className="mt-2 w-full"><option>All positions</option></Select></label><div className="flex items-end"><Button className="w-full">Save assignment</Button></div></CardContent></Card>
    <Card className="overflow-hidden"><CardHeader className="border-b border-slate-100 pb-5"><h2 className="font-bold">Current assignments</h2></CardHeader><div className="overflow-x-auto"><table className="w-full min-w-[850px] text-left text-xs"><thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-400"><tr>{["Reviewer","Primary scope","Departments / positions","Positions","Applications",""].map(x=><th key={x} className="px-5 py-3">{x}</th>)}</tr></thead><tbody className="divide-y divide-slate-100">{assignments.map(r=><tr key={r[0]}><td className="px-5 py-4 font-bold">{r[0]}</td><td className="px-5 py-4">{r[1]}</td><td className="px-5 py-4 text-slate-500">{r[2]}</td><td className="px-5 py-4">{r[3]}</td><td className="px-5 py-4 font-semibold">{r[4]}</td><td className="px-5 py-4"><Button size="sm" variant="ghost">Edit</Button></td></tr>)}</tbody></table></div></Card>
  </PortalShell>;
}

const positions = [
  ["Lecturer I","Academic","Computer Science & Engineering","1,284","8","Active"],
  ["Assistant Lecturer","Academic","English","926","6","Active"],
  ["Senior Assistant Registrar","Non-teaching","Registry","418","7","Active"],
  ["Medical Officer II","Non-teaching","Health Centre","302","5","Active"],
  ["Technologist II","Non-teaching","Chemical Engineering","246","6","Active"],
];

export function PositionsPage() {
  return <PortalShell><PageHeader eyebrow="Recruitment configuration" title="Job positions" description="Review active vacancies and the document rules used by the automated screening engine." actions={<Button><Plus className="size-4" /> Add position</Button>} />
    <div className="grid gap-4 sm:grid-cols-3">{[["Active positions","84",Building2],["Requirement rules","126",ShieldCheck],["Applications mapped","25,438",UsersRound]].map(([a,b,Icon])=><Card key={String(a)}><CardContent className="flex items-center justify-between p-5"><div><p className="text-xs text-slate-500">{a as string}</p><p className="mt-1 text-2xl font-bold">{b as string}</p></div><Icon className="size-5 text-oau-blue" /></CardContent></Card>)}</div>
    <Card className="p-4"><div className="grid gap-3 md:grid-cols-[1fr_180px_auto]"><Input placeholder="Search position, department or unit" /><Select><option>All categories</option><option>Academic</option><option>Non-teaching</option></Select><Button variant="outline"><Download className="size-4" /> Export positions</Button></div></Card>
    <Card className="overflow-hidden"><div className="overflow-x-auto"><table className="w-full min-w-[850px] text-left text-xs"><thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-400"><tr>{["Position","Category","Faculty / Unit","Applications","Rules","Status",""].map(x=><th key={x} className="px-5 py-3">{x}</th>)}</tr></thead><tbody className="divide-y divide-slate-100">{positions.map(r=><tr key={r[0]}><td className="px-5 py-4 font-bold">{r[0]}</td><td className="px-5 py-4">{r[1]}</td><td className="px-5 py-4 text-slate-500">{r[2]}</td><td className="px-5 py-4">{r[3]}</td><td className="px-5 py-4">{r[4]}</td><td className="px-5 py-4"><Badge tone="green">{r[5]}</Badge></td><td className="px-5 py-4"><Button size="sm" variant="outline">View rules</Button></td></tr>)}</tbody></table></div></Card>
  </PortalShell>;
}

export function ReviewerWorkspacePage() {
  return <PortalShell><PageHeader eyebrow="Dean / Director workspace" title="Faculty of Technology review" description="Restricted workspace showing only the applications and positions assigned to your reviewer account." actions={<Button><Download className="size-4" /> Download review file</Button>} />
    <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4 text-xs text-indigo-800"><strong>Restricted access:</strong> You can access complete applications assigned to the Faculty of Technology. Administrative screening and email tools are hidden.</div>
    <div className="grid gap-4 sm:grid-cols-3">{[["Assigned positions","6"],["Ready for assessment","1,826"],["Successful submitted","214"]].map(([a,b])=><Card key={a} className="p-5"><p className="text-xs text-slate-500">{a}</p><p className="mt-2 text-2xl font-bold">{b}</p></Card>)}</div>
    <Card><CardHeader className="border-b border-slate-100 pb-5"><h2 className="font-bold">Assigned positions</h2></CardHeader><CardContent className="grid gap-4 sm:grid-cols-2">{[["Lecturer I � Computer Science","486 applications"],["Lecturer II � Chemical Engineering","352 applications"],["Assistant Lecturer � Architecture","298 applications"],["Technologist II � Engineering","214 applications"]].map(([a,b])=><div key={a} className="flex items-center justify-between rounded-xl border border-slate-200 p-4"><div><p className="text-xs font-bold">{a}</p><p className="mt-1 text-[11px] text-slate-500">{b}</p></div><Button size="sm" variant="outline">Open</Button></div>)}</CardContent></Card>
  </PortalShell>;
}
