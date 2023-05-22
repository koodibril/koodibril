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
    if (appId >= 3 && appId <= 20)
      return applications.slice(appId - 3, appId + 4);
    if (appId < 3)
      return [
        ...applications.slice(appId - 3),
        ...applications.slice(0, appId + 4),
      ];
    if (appId > 20)
      return [
        ...applications.slice(appId - 3),
        ...applications.slice(0, appId + 4 - 24),
      ];
  };

  const isBeforeOrAfter = (id: number) => {
    const apps = getApps();
    if (apps) {
      const appId = apps.findIndex((app) => app.name === currentApp);
      if (appId === -1) return false;
      if (appId - 1 === id || appId + 1 === id) return true;
    }
    return false;
  };

  const generateApps = () => {
    const apps = getApps();
    if (engine && apps && apps.length > 0) {
      return apps.map((app, id) => {
        return (
          <div key={id}>
            <div
              key={app.name}
              className={`breadcrumb-cartridge${
                currentApp === app.name ? " selected" : ""
              }`}
              onClick={() => engine.goTo(app.name)}
            >
              <img src={app.logo} />
            </div>
            {id < apps.length - 1 ? (
              <div
                key={app.name + "sep"}
                className={
                  "breadcrumb-separator" +
                  (isBeforeOrAfter(id) ? " beforeOrAfter" : "")
                }
              >
                {" "}
              </div>
            ) : null}
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
