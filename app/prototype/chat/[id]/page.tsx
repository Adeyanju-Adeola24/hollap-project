import ClientChatPage from "./client-page";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export default function ChatDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <ClientChatPage id={params} />;
}
