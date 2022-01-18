import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import lovelyEmoji from "../../assets/lottie/lovelyEmoji";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Giuliano Pértile")}
        </p>
        <p className={isDark ? "dark-mode footer-text center-emoji-footer" : "footer-text center-emoji-footer"}>
          <DisplayLottie animationData={lovelyEmoji} />
        </p>
      </div>
    </Fade >
  );
}
