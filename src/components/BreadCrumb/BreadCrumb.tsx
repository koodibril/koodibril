import React from "react";
import "./BreadCrumb.css";
import { applications } from "src/Babylonjs/Texts";
import { KoodibrilEngine, pannelInfo } from "src/Babylonjs/Engine";

const BreadCrumb: React.FC<{
  appName: pannelInfo;
  engine: KoodibrilEngine | undefined;
}> = (props) => {
  const currentApp = props.appName.app;
  const engine = props.engine;
  const generateApps = () => {
    if (engine) {
      return applications.map((app, id) => {
        return (
          <div
            key={id}
            className="breadcrumb-cartridge"
            style={{ borderColor: currentApp === app.name ? "red" : "black" }}
            onClick={() => engine.goTo(app.name)}
          >
            {app.logo ? <img src={app.logo} /> : null}
          </div>
        );
      });
    }
  };
  return <div className="breadcrumb-wrapper">{generateApps()}</div>;
};

export default BreadCrumb;
