import React from "react";
import "./navbar.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navUl">
        <li className="navItem">
          {" "}
          <Link href="/" className="navLink">
            صفحه اصلی
          </Link>{" "}
        </li>
        <li className="navItem">
          {" "}
          <Link href="/" className="navLink">
            وبلاگ{" "}
          </Link>{" "}
        </li>
        <li className="navItem">
          {" "}
          <Link href="/" className="navLink">
            رویدادها{" "}
          </Link>{" "}
        </li>
        <li className="navItem">
          {" "}
          <Link href="/" className="navLink">
            درباره ما{" "}
          </Link>{" "}
        </li>
        <li className="navItem">
          {" "}
          <Link href="/" className="navLink">
            تماس با ما{" "}
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
