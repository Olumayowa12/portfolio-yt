import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gray-500 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
            <h3 className="text-lg font-medium mb-4">About Us</h3>
            <p className="text-white leading-loose">We are a team of passionate developers dedicated to creating innovative solutions that help businesses succeed.</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <p className="text-white leading-loose">1570 baltimore pike<br />Lincon University 19352, USA<br />Email:Olumayowa.oduntan@lions.lincoln.edu<br />Phone: 4847560438</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
