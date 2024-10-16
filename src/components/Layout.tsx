import React from 'react';
import { useLayout } from '../contexts/LayoutContext';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { viewportSize, footerStyle } = useLayout();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-grow ${viewportSize === 'desktop' ? 'pt-20' : ''}`}>
        {children}
      </main>
      {footerStyle !== 'none' && <Footer style={footerStyle} />}
    </div>
  );
};

export default Layout;