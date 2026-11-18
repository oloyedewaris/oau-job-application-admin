"use client";

import { useState } from "react";

export function useDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return {
    isSidebarOpen,
    openSidebar: () => setIsSidebarOpen(true),
    closeSidebar: () => setIsSidebarOpen(false),
  };
}
