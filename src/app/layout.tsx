
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dexe Black Hair Shampoo | Instant 5-Minute Grey Coverage',
  description: 'Say goodbye to grey hair in just 5 minutes. Dexe Black Hair Shampoo provides natural-looking black hair that lasts for 30 days. No salon visits required.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-[#F2F2F0] text-[#1A1A1A]">{children}</body>
    </html>
  );
}
