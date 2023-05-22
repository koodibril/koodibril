import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { KoodibrilEngine, pannelInfo } from "./Babylonjs/Engine";
import Slider from "./components/Slider/Slider";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";

function App() {
  const [appName, setAppName] = useState<pannelInfo>({
    app: "KOODIBRIL",
    side: false,
  });
  const [engine, setEngine] = useState<KoodibrilEngine>();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
    const engine = new KoodibrilEngine(setShow, setAppName);
    engine.createScene(canvas);
    engine.animate();
    setEngine(engine);
  }, []);

  return (
    <div className="engine-wrapper">
      <canvas id="renderCanvas"></canvas>
      <Slider appName={appName} show={show} setShow={setShow}></Slider>
      <BreadCrumb appName={appName} engine={engine}></BreadCrumb>
    </div>
  );
}

export default App;
