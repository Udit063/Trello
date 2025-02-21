export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 min-h-screen h-full">
      <main className="pt-40 pb-20 bg-slate-1-">{children}</main>
    </div>
  );
}
