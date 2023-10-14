import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <h1>Header</h1>
        {children}
        <h1>Footer</h1>
      </body>
    </html>
  );
}
