import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import { getServerSession } from 'next-auth';
import  SessionProvider  from '@/lib/SessionProvider';
import { authOptions } from '@/lib/auth';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS Blog',
  description: 'What those using NextJS have learned while using NextJS.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang='en'>
      <body className={raleway.className}>
        <SessionProvider session={session}>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
