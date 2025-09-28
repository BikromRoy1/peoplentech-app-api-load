import Footer from '@/components/Footer/Footer';
import MetaComponent from '@/components/MetaComponent/MetaComponent';
import Navbar from '@/components/Navbar/Navbar';
import TopBar from '@/components/TopBar/TopBar';
import WhatsappIcons from '@/components/WhatsappIcons/WhatsappIcons';
import '@vidstack/react/player/styles/default/layouts/video.css';
import '@vidstack/react/player/styles/default/theme.css';
import { Hind_Siliguri, Montserrat } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer } from 'react-toastify';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

const hindSiliguri = Hind_Siliguri({
  subsets: ['latin', 'bengali'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hind-siliguri',
});

export const metadata = {
  title: 'Professional IT Training Institute in Bangladesh - PeopleNTech',
  description:
    'We PeopleNTech is offering professional IT training course &amp; job placement facility for students. We are affiliating with top notch IT company in Bangladesh..',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <MetaComponent />
      <body className={`${montserrat.variable} ${hindSiliguri.variable}`}>
        <NextTopLoader showSpinner={false} />
        <TopBar />
        <Navbar />
        {children}
        <ToastContainer autoClose={4000} theme='colored' />
        <Footer />
        <WhatsappIcons />
      </body>
    </html>
  );
}
