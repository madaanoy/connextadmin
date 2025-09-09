import "./globals.css";

export const metadata = {
  title: "My Minimal App",
  description: "Next.js minimal setup",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
        {children}
        <footer className="p-4 text-center">© 2025 My App</footer>
      </body>
    </html>
  );
}
