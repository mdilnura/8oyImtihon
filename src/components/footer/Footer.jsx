import React from "react";
import "./Footer.css";
import "../../index.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="mcontainer">
        <p>Made with ❤️ and 🥑</p>
        <div className="socials">
          <a href="#">
            <img src="../assets/images/Instagram.svg" alt="" />
          </a>
          <a href="#">
            <img src="../assets/images/Frame.svg" alt="" />
          </a>
          <a href="#">
            <img src="../assets/images/tiktok.svg" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}
