import "./globals.css";

export const metadata = {
  title: "connext",
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

      </body>
    </html>
  );
}
