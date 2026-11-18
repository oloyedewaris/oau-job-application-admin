import type { ReactNode } from "react";
import { AdminLayout } from "@/layouts/AdminLayout";

export function PortalShell({ children }: { children: ReactNode }) {
  return (
    <AdminLayout>
      <div className="mx-auto max-w-[1600px] space-y-6 p-4 sm:p-6 lg:p-8">{children}</div>
    </AdminLayout>
  );
}
