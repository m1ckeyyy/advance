import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const DMSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Advance Nieruchomości',
    description: 'Advance Nieruchomości',
    icons: {
        icon: '/images/logo3.png',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
