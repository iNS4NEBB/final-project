import React from "react";
import "./footer.css";
import { FaMailBulk, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
      <div className="kontact">
        <span className="kontact-mail"><FaMailBulk size="2rem"/>Bicycles.company@email.com</span>
        <span><FaWhatsapp size="2rem"/> +7777-777-7777</span>
        <span><FaTelegram size="2rem"/></span> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;