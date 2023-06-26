import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { KoodibrilEngine, pannelInfo } from "./Babylonjs/Engine";
import Modal from "./components/Modal/Modal";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import Menu from "./components/Menu/Menu";

function App() {
  const [appName, setAppName] = useState<pannelInfo>({
    app: "KOODIBRIL",
    side: false,
  });
  const [error, setError] = useState("");
  const [engine, setEngine] = useState<KoodibrilEngine>();
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  useEffect(() => {
    const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
    const engine = new KoodibrilEngine(setShow, setAppName);
    if (engine.support()) {
      engine.createScene(canvas);
      engine.animate();
      setEngine(engine);
    } else {
      setError("WebGL is not supported on your device");
    }
  }, []);

  return (
    <div className="engine-wrapper">
      <Menu />
      <div className="international">
        <div className="language">
          <b>{language.toUpperCase()}</b>
        </div>
        {language === "en" ? (
          <div className="idropdown" onClick={() => setLanguage("fr")}>
            <b>FR</b>
          </div>
        ) : (
          <div className="idropdown" onClick={() => setLanguage("en")}>
            <b>EN</b>
          </div>
        )}
      </div>
      {error ? error : <canvas id="renderCanvas"></canvas>}
      <Modal
        appName={appName}
        show={show}
        setShow={setShow}
        engine={engine}
        language={language}
      ></Modal>
      <BreadCrumb appName={appName} engine={engine}></BreadCrumb>
    </div>
  );
}

export default App;
