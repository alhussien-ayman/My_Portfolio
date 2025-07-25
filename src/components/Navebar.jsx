import React, { useRef , useEffect } from "react";
import PropTypes from "prop-types";

export const Navebar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const initActiveBox =() => {
   activeBox.current.style.top =lastActiveLink.current.offsetTop + 'px' ;
   activeBox.current.style.left =lastActiveLink.current.offsetLeft + 'px' ;
   activeBox.current.style.width =lastActiveLink.current.offsetWidth + 'px' ;
   activeBox.current.style.height =lastActiveLink.current.offsetHeight + 'px' ;
  }
  useEffect(initActiveBox ,[]);
  window.addEventListener('resize' , initActiveBox);
  const activeCurrentLink =(event) =>{
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current =event.target;

    activeBox.current.style.top =event.target.offsetTop + 'px' ;
   activeBox.current.style.left =event.target.offsetLeft + 'px' ;
   activeBox.current.style.width =event.target.offsetWidth + 'px' ;
   activeBox.current.style.height =event.target.offsetHeight + 'px' ;
  }
  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
    {
      label: "Youtube",
      link: "#youtube",
      className: "nav-link ",
    },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          ref={className.includes("active") ? lastActiveLink : null}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navebar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navebar;
