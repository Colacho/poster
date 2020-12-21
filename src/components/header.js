import React from "react";
import Img from "gatsby-image";

const Header = () => {
  return (
    <header className="text-center bg-yellow-900">
      <div className="contaimer mx-auto">
        <h1 className="font-mono text-xl p-4">Posters de peliculas clasicas</h1>
        <div>
          <Img />
        </div>
      </div>
    </header>
  );
};

export default Header;
