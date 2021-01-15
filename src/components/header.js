import React from 'react';
import Img from 'gatsby-image';

const Header = () => {
  return (
    <header className="text-center text-yellow-200 bg-gradient-to-t from-yellow-600 to-yellow-800 ">
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
