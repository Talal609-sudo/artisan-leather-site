import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header'
import Footer from '../components/Footer'


export const metadata: Metadata = {
  title: 'Artisan Leather & Co.',
  description: 'Premium, durable leather goods made in Sialkot. Handcraft Leather Jackets & Accessories.',
  openGraph: { title: 'Artisan Leather & Co.', description: 'Premium, durable leather goods made in Sialkot. Handcraft Leather Jackets & Accessories.', images: ['/og.png'] }
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (<html lang="en"><body><Header/><main className="container">{children}</main><Footer/></body></html>);
}
