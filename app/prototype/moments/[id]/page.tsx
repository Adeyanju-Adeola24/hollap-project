import ClientMomentDetail from "./client-page";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export default function MomentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <ClientMomentDetail params={params} />;
}
