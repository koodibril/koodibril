import React, { useEffect, useRef } from "react";
import "./BreadCrumb.css";
import { applications } from "src/Babylonjs/Texts";
import { KoodibrilEngine, pannelInfo } from "src/Babylonjs/Engine";

const BreadCrumb: React.FC<{
  appName: pannelInfo;
  engine: KoodibrilEngine | undefined;
}> = (props) => {
  const currentApp = props.appName.app;
  const engine = props.engine;
  const appRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    appRefs.current = appRefs.current.slice(0, applications.length);
  }, [applications]);

  useEffect(() => {
    const appId = applications.findIndex((app) => app.name === currentApp);
    if (appId !== -1)
      appRefs.current[appId]?.scrollIntoView({ block: "center" });
  }, [currentApp]);

  const generateApps = () => {
    if (engine) {
      return applications.map((app, id) => {
        return (
          <div
            key={id}
            ref={(el) => (appRefs.current[id] = el)}
            className={`breadcrumb-cartridge${
              currentApp === app.name ? " selected" : ""
            }`}
            onClick={() => engine.goTo(app.name)}
          >
            <img src={app.logo} />
          </div>
        );
      });
    }
  };
  return <div className="breadcrumb-wrapper">{generateApps()}</div>;
};

export default BreadCrumb;
