import React, { useMemo, useState } from "react";
import "./Modal.css";
import { applications } from "src/Babylonjs/Texts";
import { KoodibrilEngine, pannelInfo } from "src/Babylonjs/Engine";
import { ReactComponent as XMark } from "src/icons/xmark-solid.svg";
import Carousel from "./Carousel/Carousel";

const Modal: React.FC<{
  appName: pannelInfo;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  engine: KoodibrilEngine | undefined;
  language: "fr" | "en";
}> = (props) => {
  const app = props.appName.app;
  const [anim, setAnim] = useState(" blowIn");
  const appInfo = useMemo(() => {
    const index = applications.findIndex((el) => el.name === app);
    if (index !== -1 && app !== "") {
      return {
        subtitle: applications[index].subtitle,
        logo: applications[index].logo,
        pictures: applications[index].pictures,
        pdf: applications[index].pdf,
        description: applications[index].description,
        link: applications[index].link,
        git: applications[index].git,
        technos: applications[index].technos,
      };
    }
  }, [app]);

  const handleClose = () => {
    if (props.engine && props.show && anim === " blowIn out") {
      setAnim(" blowIn");
      props.engine.reset();
      props.setShow(false);
    }
  };
  const openLink = (url: string | undefined) => {
    if (!url) return;
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
    link.parentNode?.removeChild(link);
  };
  return (
    <div
      style={{ display: props.show ? "block" : "none" }}
      className={"wrapper" + anim}
      onAnimationEnd={() => handleClose()}
    >
      <XMark className="close-modal" onClick={() => setAnim(" blowIn out")} />
      <div className="title-wrapper">
        <div className="title row justify-content-center">{app}</div>
        <hr></hr>
        <div className="subtitle row justify-content-center">
          {appInfo?.subtitle[props.language]}
        </div>
      </div>
      <div className="content">
        <div
          className="pictures"
          style={
            appInfo?.pictures.length === 0
              ? { justifyContent: "space-around" }
              : { justifyContent: "space-between" }
          }
        >
          {window.innerWidth < 1000 && appInfo ? (
            <Carousel pictures={appInfo.pictures}></Carousel>
          ) : (
            <>
              {appInfo?.pictures.map((pic, id) => {
                return (
                  <div key={id} className="picture">
                    <img src={pic} />
                  </div>
                );
              })}
              {appInfo?.pictures.length === 0 ? (
                <div className="picture">
                  <img src={"/images/damn.png"} />
                </div>
              ) : null}
            </>
          )}
        </div>
        <div className="footer">
          <div className="footer-left">
            <div className="description">
              {appInfo?.description[props.language]}
            </div>
            <div className="links">
              <div
                className="link"
                style={{ backgroundColor: "#740e24" }}
                onClick={() => openLink(appInfo?.link)}
              >
                {props.language === "en"
                  ? "Access live Demo >"
                  : "Voir la demo live >"}
              </div>
              <div
                className="link"
                style={{ backgroundColor: "#071c21", marginTop: "10px" }}
                onClick={() => openLink(appInfo?.git)}
              >
                {props.language === "en"
                  ? "Access Github repo"
                  : "Voir le repo >"}
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="technos">
              <b>Technos</b>
              <div className="lr"></div>
              <div className="tech">
                <b>Front</b>
                <ul>
                  {appInfo?.technos.front.map((tech, id) => {
                    return <li key={id}>{tech}</li>;
                  })}
                </ul>
                <b>Back</b>
                <ul>
                  {appInfo?.technos.back.map((tech, id) => {
                    return <li key={id}>{tech}</li>;
                  })}
                </ul>
                <b>Database</b>
                <ul>
                  {appInfo?.technos.database.map((tech, id) => {
                    return <li key={id}>{tech}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="small-links">
            <div
              className="link"
              style={{ backgroundColor: "#740e24" }}
              onClick={() => openLink(appInfo?.link)}
            >
              {props.language === "en"
                ? "Access live Demo >"
                : "Voir la demo live >"}
            </div>
            <div
              className="link"
              style={{ backgroundColor: "#071c21", marginTop: "10px" }}
              onClick={() => openLink(appInfo?.git)}
            >
              {props.language === "en"
                ? "Access Github repo"
                : "Voir le repo >"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
