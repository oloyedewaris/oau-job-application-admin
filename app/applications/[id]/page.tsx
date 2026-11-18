import { ApplicationDetailPage } from "@/features/applications/ApplicationDetailPage";

export function generateStaticParams() {
  return [{ id: "18426" }, { id: "18425" }, { id: "18424" }, { id: "18423" }, { id: "18422" }];
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ApplicationDetailPage id={id} />;
}
