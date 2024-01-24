import React from "react";
import "./navbar.scss";
import Link from "next/link";
import { MdHome } from "react-icons/md";
import { FaBlog } from "react-icons/fa6";
import { MdEventRepeat } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navUl">
        <li className="navItem">
          {" "}
          <Link href="/" className="navLink">
            <MdHome className="navLinkIcon" />
            <p>صفحه اصلی</p>
          </Link>{" "}
        </li>
        <li className="navItem">
          {" "}
          <Link href="/" className="navLink">
            <FaBlog className="navLinkIcon" />
            <p>وبلاگ</p>
          </Link>{" "}
        </li>
        <li className="navItem">
          {" "}
          <Link href="/" className="navLink">
            <MdEventRepeat className="navLinkIcon" />
            <p>رویدادها</p>
          </Link>{" "}
        </li>

        <li className="navItem">
          {" "}
          <Link href="/" className="navLink">
            <FaWhatsapp className="navLinkIcon" />
            <p>تماس با ما</p>
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
