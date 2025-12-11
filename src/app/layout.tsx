import Navbar from "@/components/layout/Navbar";
import I18nProvider from "@/components/I18nProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Synccrra AI",
  description: "AI Marketing Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <I18nProvider>
            <Navbar />
            {children}
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
