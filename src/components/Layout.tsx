import React from 'react';
import { useLayout } from '../contexts/LayoutContext';
import { useMainPadding } from '../contexts/MainPaddingContext';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { viewportSize, footerStyle } = useLayout();
  const { mainPadding } = useMainPadding();

  const getMainClass = () => {
    switch (mainPadding) {
      case 'no-padding':
        return 'flex-grow';
      case 'image-detail-pc':
        return 'flex-grow pt-0';
      case 'mobile':
      case 'tablet':
        return 'flex-grow pt-16';
      case 'desktop':
      default:
        return 'flex-grow pt-20';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={getMainClass()}>
        {children}
      </main>
      {footerStyle !== 'none' && <Footer style={footerStyle} />}
    </div>
  );
};

export default Layout;