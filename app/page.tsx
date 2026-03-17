import type { Metadata } from 'next';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'Main Street Tech | Enterprise Technology Solutions',
  description:
    'Main Street Tech delivers enterprise-grade database management, application services, data analytics, IT advisory, and hosting solutions built for organizations that demand reliability and performance.',
  openGraph: {
    title: 'Main Street Tech | Enterprise Technology Solutions',
    description:
      'Main Street Tech delivers enterprise-grade database management, application services, data analytics, IT advisory, and hosting solutions built for organizations that demand reliability and performance.',
    url: 'https://www.mainstreettech.com',
  },
  twitter: {
    title: 'Main Street Tech | Enterprise Technology Solutions',
    description:
      'Main Street Tech delivers enterprise-grade database management, application services, data analytics, IT advisory, and hosting solutions built for organizations that demand reliability and performance.',
  },
};
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import LatestBlog from './components/LatestBlog';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <WhyUs />
        <Process />
        <Testimonials />
        <LatestBlog />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
