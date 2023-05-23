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
  return (
    <div
      style={{ display: props.show ? "block" : "none" }}
      className={"wrapper" + anim}
      onAnimationEnd={() => handleClose()}
    >
      <XMark className="close-modal" onClick={() => setAnim(" blowIn out")} />
      <div className="title-wrapper">
        <div className="title row justify-content-center">
          <img className="logo" src={appInfo?.logo} />
          {app}
        </div>
        <div className="subtitle row justify-content-center">
          {appInfo?.subtitle}
        </div>
      </div>
      <div className="content">
        <div className="pictures">
          {appInfo && appInfo.pictures ? (
            appInfo.pictures.length === 0 && appInfo.pdf === "" ? (
              <div className="nopic">No pictures are available.</div>
            ) : (
              <Carousel
                pictures={appInfo.pictures}
                pdf={appInfo.pdf}
              ></Carousel>
            )
          ) : null}
        </div>
        <div className="description">{appInfo?.description}</div>
        <div className="links">
          {appInfo?.link ? (
            <div className="link">
              You can access a live demo{" "}
              <a href={appInfo?.link} target="_blank" rel="noopener noreferrer">
                here
              </a>
            </div>
          ) : (
            <div className="link">No demo is actually available.</div>
          )}
          {appInfo?.git ? (
            <div className="link">
              This project is open-source, you can find it on{" "}
              <a href={appInfo.git} target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </div>
          ) : (
            <div className="link">
              This project is private, no repository is available.
            </div>
          )}
        </div>
      </div>
      <div className="footer">
        <div className="technos">
          {appInfo?.technos.map((tech, id) => {
            return <i key={id} className={`${tech} tech`}></i>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
