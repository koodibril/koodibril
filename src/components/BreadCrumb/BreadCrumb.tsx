import React from "react";
import "./BreadCrumb.css";
import { applications } from "src/Babylonjs/Texts";
import { pannelInfo } from "src/Babylonjs/Engine";

const BreadCrumb: React.FC<{ appName: pannelInfo }> = (props) => {
  const generateApps = () => {
    return applications.map((app, id) => {
      return (
        <div key={id} className="breadcrumb-cartridge">
          {app.logo ? <img src={app.logo} /> : null}
        </div>
      );
    });
  };
  return <div className="breadcrumb-wrapper">{generateApps()}</div>;
};

export default BreadCrumb;
