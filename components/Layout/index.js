import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({ title, children, padding, ...props }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    console.log('d', window);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-sand-100">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Kakun Studios is a interior design studio that focuses on create and redesign beautiful places"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar scrolled={scrolled} />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
