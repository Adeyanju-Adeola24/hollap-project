import ClientVendorProfile from "./client-page";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export default function VendorProfilePage() {
  return <ClientVendorProfile />;
}
