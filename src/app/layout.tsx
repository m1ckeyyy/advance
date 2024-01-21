import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const DMSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'AAA',
    description: 'Aaa',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
