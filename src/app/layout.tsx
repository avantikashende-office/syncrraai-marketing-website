import "./globals.css";

export const metadata = {
  title: "Synccrra AI",
  description: "AI Marketing Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
