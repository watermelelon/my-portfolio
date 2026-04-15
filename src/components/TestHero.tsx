import React from "react";


const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <span className="left">My Portfolio</span>
        <span className="circle"></span>
        <span className="right">Emilio Santamaria</span>
      </div>
    </header>
  );
};

export default Header;