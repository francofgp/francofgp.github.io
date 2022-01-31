import React from "react";
import "./Button.scss";
import emoji from "react-easy-emoji";


export default function Button({ text, className, href, newTab }) {
  return (
    <div className={className}>
      <a className="main-button" href={href} target={newTab && "_blank"}>
        {emoji(text)}
      </a>
    </div>
  );
}
