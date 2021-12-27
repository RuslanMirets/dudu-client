import Head from 'next/head';
import React from 'react';
import { Header } from '../components/Header';

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title || 'Турфирма DuDu'}</title>
        <meta name="description" content={`Туристическая фирма. ` + description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords || 'Турфирма, отдых'} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <Header />
        <main className="main">{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
