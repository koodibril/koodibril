import React from "react";
import "./Menu.css";
import { ReactComponent as MenuLogo } from "../../icons/menu.svg";
import { ReactComponent as LinkedinLogo } from "../../icons/linkedin.svg";
import { ReactComponent as InstagramLogo } from "../../icons/instagram.svg";

const Menu: React.FC = (props) => {
  console.log(props);
  const handleLink = (url: string) => {
    if (!url) return;
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
    link.parentNode?.removeChild(link);
  };

  return (
    <div className="menu">
      <div className="menu-logo">
        <MenuLogo />
      </div>
      <img
        className="menu-dropdown"
        id="one"
        src="/images/malt.png"
        title="malt"
        onClick={() =>
          handleLink("https://www.malt.fr/profile/florianmariedoucet")
        }
      />
      <LinkedinLogo
        className="menu-dropdown"
        id="two"
        title="linkedin"
        onClick={() =>
          handleLink("https://www.linkedin.com/in/florian-marie-doucet/")
        }
      />
      <InstagramLogo
        className="menu-dropdown"
        id="three"
        title="instagram"
        onClick={() =>
          handleLink("https://www.instagram.com/dorianflariemousset")
        }
      />
    </div>
  );
};

export default Menu;
