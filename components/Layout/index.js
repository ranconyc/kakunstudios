import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({ title, children, noPadding, ...props }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = document.addEventListener('scroll', () =>
      window.pageYOffset > 0 ? setScrolled(true) : setScrolled(false)
    );

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-sand-100">
      <Head>
        <title>{`Kakun Studios|| ${title}`}</title>
        <meta
          name="description"
          content="Kakun Studios is a interior design studio that focuses on create and redesign beautiful places"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar scrolled={scrolled} />
      <main className={`grow ${noPadding ? null : 'mt-14'}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
