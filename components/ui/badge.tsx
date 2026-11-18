import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "green" | "amber" | "blue" | "slate" | "red";
const tones: Record<BadgeTone, string> = {
  green: "border-emerald-200 bg-emerald-50 text-emerald-700",
  amber: "border-amber-200 bg-amber-50 text-amber-700",
  blue: "border-blue-200 bg-blue-50 text-blue-700",
  slate: "border-slate-200 bg-slate-50 text-slate-600",
  red: "border-red-200 bg-red-50 text-red-700",
};

function Badge({ className, tone = "slate", ...props }: React.ComponentProps<"span"> & { tone?: BadgeTone }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold", tones[tone], className)} {...props} />
  );
}

export { Badge };
