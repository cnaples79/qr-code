import { ClerkProvider, SignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'QR Code Updater | Velocitor Solutions',
  description: 'Update a QR code link for a YouTube video.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div
            className={`
            flex
            min-h-screen
            flex-col
            items-center
            justify-center
            bg-gray-50
            `}
          >
            <SignedIn>{children}</SignedIn>
            <SignedOut>
              <SignIn />
            </SignedOut>
          </div>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
