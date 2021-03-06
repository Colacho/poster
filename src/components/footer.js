import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="w-full text-yellow-200 bg-gradient-to-b from-yellow-600 to-yellow-800 mt-0">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <p className="font-mono text-xl p-4">Contacto</p>
          <a className="self-center" href="mailto:someone@example.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-xl  hover:text-yellow-400 transition delay-100 duration-100 ease-in-out"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
