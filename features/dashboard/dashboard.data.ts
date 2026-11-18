import {
  BellRing, BriefcaseBusiness, ClipboardCheck, FileCheck2, FileClock,
  LayoutDashboard, Mail, ScrollText, Settings, ShieldCheck, UsersRound,
} from "lucide-react";

export const navigation = [
  { label: "Overview", icon: LayoutDashboard, href: "/" },
  { label: "Screening", icon: ShieldCheck, href: "/screening", badge: "1" },
  { label: "Applications", icon: ClipboardCheck, href: "/applications" },
  { label: "Reviewers", icon: UsersRound, href: "/reviewers" },
  { label: "Assignments", icon: BriefcaseBusiness, href: "/assignments" },
  { label: "Job positions", icon: BriefcaseBusiness, href: "/positions" },
  { label: "Successful candidates", icon: FileCheck2, href: "/candidates" },
  { label: "Notifications", icon: Mail, href: "/notifications", badge: "3" },
  { label: "Activity logs", icon: ScrollText, href: "/activity" },
];

export const utilityNavigation = [
  { label: "Settings", icon: Settings, href: "/settings" },
  { label: "Reviewer workspace", icon: BellRing, href: "/reviewer" },
];

export const stats = [
  { label: "Total applications", value: "25,438", detail: "+1,204 since yesterday", trend: "up", icon: FileClock, tone: "blue" },
  { label: "Complete applications", value: "18,926", detail: "74.4% of all submissions", trend: "neutral", icon: FileCheck2, tone: "green" },
  { label: "Incomplete applications", value: "6,512", detail: "25.6% require attention", trend: "neutral", icon: FileClock, tone: "amber" },
  { label: "Active reviewers", value: "42", detail: "38 assignments covered", trend: "neutral", icon: UsersRound, tone: "violet" },
];

export const screeningBreakdown = [
  { label: "Complete", value: 18926, percent: 74.4, color: "bg-emerald-500" },
  { label: "Incomplete", value: 6512, percent: 25.6, color: "bg-amber-400" },
];

export const missingRequirements = [
  { label: "NYSC discharge / exemption", count: 2418, percent: 37 },
  { label: "Professional certification", count: 1746, percent: 27 },
  { label: "Academic qualification", count: 1398, percent: 21 },
  { label: "Birth certificate", count: 950, percent: 15 },
];

export const recentApplications = [
  { id: "JOB/2026/18426", name: "Adeola Adebayo", initials: "AA", position: "Lecturer I", unit: "Computer Science & Engineering", status: "Complete", time: "2 mins ago" },
  { id: "JOB/2026/18425", name: "Chinedu Okafor", initials: "CO", position: "Senior Assistant Registrar", unit: "Registry", status: "Incomplete", time: "5 mins ago" },
  { id: "JOB/2026/18424", name: "Fatima Ibrahim", initials: "FI", position: "Medical Officer II", unit: "Health Centre", status: "Complete", time: "9 mins ago" },
  { id: "JOB/2026/18423", name: "Tolu Akinwale", initials: "TA", position: "Technologist II", unit: "Chemical Engineering", status: "Pending", time: "14 mins ago" },
];

export const activities = [
  { title: "Screening batch completed", description: "4,286 applications processed successfully", time: "12 minutes ago", tone: "green" },
  { title: "Reviewer account activated", description: "Prof. A. Ogunleye � Faculty of Arts", time: "48 minutes ago", tone: "blue" },
  { title: "Email batch delivered", description: "Exam invitation � 356 of 360 delivered", time: "2 hours ago", tone: "violet" },
];
