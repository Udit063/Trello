import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 min-h-screen h-full">
      <Navbar />
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      <Footer />
    </div>
  );
}
