import React from "react";

function Header() {
  return (
    <nav>
      <NavContent />
    </nav>
  );
}

const NavContent = () => (
  <>
    <h2>Amir..</h2>
    <div>
      <a href="#home">Home</a>
      <a href="#work">Work</a>
      <a href="#experince">Experince</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </div>

    <a href="mailto:amirbhai432@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
