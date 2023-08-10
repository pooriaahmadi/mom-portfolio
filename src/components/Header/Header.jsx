import "../../styles/header/header.scss";

import Item from "./Item";
import emailSvg from "../../images/social_media/email.svg";
import instagramSvg from "../../images/social_media/instagram.svg";
import linkedinSvg from "../../images/social_media/linkedin.svg";
import phoneSvg from "../../images/social_media/phone.svg";

const Header = () => {
  return (
    <header>
      <div className="left">
        <Item to="/">
          <h2>Home</h2>
        </Item>
        <a href="#contact">
          <h2>Contact me</h2>
        </a>
      </div>
      <div className="right">
        <a href="">
          <img src={emailSvg} alt="" />
        </a>
        <a href="">
          <img src={instagramSvg} alt="" />
        </a>
        <a href="">
          <img src={linkedinSvg} alt="" />
        </a>
        <a href="">
          <img src={phoneSvg} alt="" />
        </a>
      </div>
    </header>
  );
};

export default Header;
