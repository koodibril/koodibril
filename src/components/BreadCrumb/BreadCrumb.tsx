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
  const getApps = () => {
    const appId = applications.findIndex((app) => app.name === currentApp);
    if (appId === -1) return [];
    if (appId >= 4 && appId <= 20)
      return applications.slice(appId - 4, appId + 4);
    if (appId < 4)
      return [
        ...applications.slice(appId - 4),
        ...applications.slice(0, appId + 4),
      ];
    if (appId > 20)
      return [
        ...applications.slice(appId - 4),
        ...applications.slice(0, appId + 4 - 24),
      ];
  };

  const generateApps = () => {
    const apps = getApps();
    if (engine && apps && apps.length > 0) {
      return apps.map((app, id) => {
        return (
          <div
            key={id}
            className={`breadcrumb-cartridge${
              currentApp === app.name ? " selected" : ""
            }`}
            onClick={() => engine.goTo(app.name)}
          >
            {app.logo ? <img src={app.logo} /> : null}
          </div>
        );
      });
    }
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (engine) engine.wheel(event.deltaY * 3.3);
  };

  return (
    <div onWheel={(e) => handleWheel(e)} className="breadcrumb-wrapper">
      {generateApps()}
    </div>
  );
};

export default BreadCrumb;
