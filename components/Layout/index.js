import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({ title, description, children, noPadding, ...props }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > 0 ? setScrolled(true) : setScrolled(false);
    };
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-sand-10">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar scrolled={scrolled} />
      <main className={`grow ${noPadding ? null : 'mt-14'}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
