export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex min-h-screen">{children}</div>;
}
