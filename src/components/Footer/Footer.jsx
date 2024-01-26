import React from "react";
import icon from "../../../public/icon.ico";
import Image from "next/image";
import "./footer.scss";
import { IoLogoInstagram } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { PiTelegramLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { ImPinterest2 } from "react-icons/im";
import { FaTiktok } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer">
      <div className="right">
        <div className="right-header">
          <div className="right-header-title">
            <Image src={icon} alt="icon" className="icon" />
            <h2>فست فود و فودکورت سورنا</h2>
          </div>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
        <div className="right-middle">
          <input
            type="email"
            placeholder="جهت عضویت در خبرنامه ایمیل خود را وارد کنید"
          />
          <button type="submit">عضویت</button>
        </div>

        <div className="right-bottom">
          <div className="right-bottom-header">
            <h3>مارا در شبکه های اجتماعی دنبال کنید</h3>
          </div>
          <div className="right-icon-box">
            <ul>
              <li>
                <a href="#">
                  <IoLogoInstagram />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <CiFacebook />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <CiTwitter />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <PiTelegramLogo />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <FaWhatsapp />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <CiLinkedin />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <ImPinterest2 />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTiktok />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="left">
        <div className="left-top">
          <div className="left-top-header">
            <h3>لینک دسترسی آسان</h3>
          </div>

          <div className="left-top-link">
            <ul className="link-box">
              <h4 className="link-header">صفحات سایت</h4>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> صفحه اصلی
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> وبلاگ
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> رویدادها
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> درباره ما
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> تماس با ما
              </li>
            </ul>
          </div>
        </div>
        <div className="left-middle"></div>
        <div className="left-bottom"></div>
      </div>
    </div>
  );
};

export default Footer;
