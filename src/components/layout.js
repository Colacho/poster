import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './header';
import type from 'prop-types';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className="bg-black">
      <Helmet>
        <script
          src="https://widget.cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
        ></script>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: type.element,
};

export default Layout;
