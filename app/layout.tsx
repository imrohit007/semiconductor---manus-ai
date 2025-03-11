import "./globals.css";

export const metadata = {
  title: "Semiconductor Physics App",
  description: "Learn about semiconductor physics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  );
}
