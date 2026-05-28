import "./globals.css";

export const metadata = {
  title: " Blockride Realty | Crypto Investment Dashboard",
  description: "A modern  -data crypto investment dashboard for Bitcoin, Ethereum and USDT portfolio analytics."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
