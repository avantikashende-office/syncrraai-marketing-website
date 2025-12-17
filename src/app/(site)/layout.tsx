import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientProviders from "@/ClientProviders";
import { Footer } from "@/components/layout/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <ClientProviders>
        <Navbar />
        {children}
        <Footer />
      </ClientProviders>
    </ThemeProvider>
  );
}
