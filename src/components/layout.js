import React from "react";
import {Helmet} from "react-helmet";
import Header from "./header";
import PosterGrid from "./poster-grid";

const Layout = ({children}) => {
  return (
    <div className="">
      <Helmet>
        <script
          src="https://widget.cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
        ></script>
      </Helmet>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
