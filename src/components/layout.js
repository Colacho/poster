import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './header';
import type from 'prop-types';
import Footer from './footer';
import background from '../images/fondoPosters1.jpg';

const Layout = ({ children }) => {
  return (
    <div className="bg-cover bg-center">
      <Helmet>
        <html className="h-screen"></html>
        <body className="h-screen"></body>
        <main className="h-screen"></main>

        <script
          src="https://widget.cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
        ></script>
      </Helmet>
      <Header />
      <main className="bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: type.element,
};

export default Layout;
