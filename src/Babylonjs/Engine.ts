import {
  Engine,
  Scene,
  MeshBuilder,
  Color4,
  Vector3,
  Color3,
  FlyCamera,
  PointerEventTypes,
  Matrix,
  Animatable,
} from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
import { GridMaterial } from "@babylonjs/materials";
import { ForestActions, Forest, Bush, Tree, Flower } from "./Forest";
import { LightsActions, Lights } from "./Lights";
import { AnimationsActions, Koodibril } from "./Animations";
import { GuiActions } from "./Gui";
import { applications, textActions } from "./Texts";
import { CustomLoadingScreen } from "./Screen";

export interface pannelInfo {
  app: string;
  side: boolean;
}

export class KoodibrilEngine {
  public loading: boolean;
  // the canvas is where our scene is loaded
  private canvas!: HTMLCanvasElement;
  // the babylon engine
  public engine!: Engine;
  // the camera from where we see the scene
  private camera!: FlyCamera;
  // the scene where we will load our models
  private scene!: Scene;
  // true if we are sliding
  private move!: boolean;
  // true if there is already a timeout running
  private timeout!: boolean;
  // true if the flower is opened
  private open!: boolean;
  // last value of touching screen on Y axis (for scrolling in phone)
  private touchY!: number;
  // device type, 2 === pc, 3 === phone
  private device!: number;
  // store all mesh of the forest
  private forest!: Forest;
  // class that oversee the forests loading, and add/delete rows
  private forestActions!: ForestActions;
  // store all light related value
  private lights!: Lights;
  // class that oversee the lights loading, and change their values for day/night
  private lightsAction!: LightsActions;
  private koodibril!: Koodibril;
  private animationsActions!: AnimationsActions;
  private guiAction!: GuiActions;
  public textActions!: textActions;
  private position!: number;
  private wheely!: number;

  public constructor(
    private setShow: React.Dispatch<React.SetStateAction<boolean>>,
    private setAppName: React.Dispatch<React.SetStateAction<pannelInfo>>
  ) {
    this.loading = false;
  }

  // instantiate everything in the scene, take canvas for rendering
  public async createScene(canvas: HTMLCanvasElement): Promise<void> {
    this.canvas = canvas;
    this.move = false;

    this.engine = new Engine(this.canvas, true);
    const loadingScreen = new CustomLoadingScreen(this.canvas);
    this.engine.loadingScreen = loadingScreen;
    this.engine.displayLoadingUI();
    this.engine.setHardwareScalingLevel(1 / window.devicePixelRatio);
    this.engine.loadingUIText = "Creating scene";

    this.scene = new Scene(this.engine);
    this.scene.clearColor = new Color4(1, 1, 1, 1); // set the color of the void
    this.scene.ambientColor = new Color3(1, 1, 1); // set the ambiant color, don't seem to affect object
    // this.scene.fogMode = Scene.FOGMODE_LINEAR;
    // this.scene.fogStart = 4.0;
    // this.scene.fogEnd = 20.0;
    // this.scene.fogColor = new Color3(1, 1, 1); // set the color of the fog

    this.camera = new FlyCamera("camera1", new Vector3(0, 3, -5), this.scene);

    this.camera.setTarget(new Vector3(0, 2, 0));
    this.lightsAction = new LightsActions(this.scene, this.camera, this.engine);
    this.lightsAction.instantiateLights();
    this.lights = this.lightsAction.lights;

    this.engine.loadingUIText = "Creating ground";
    const ground = MeshBuilder.CreateGround("ground", {
      width: 300,
      height: 300,
    });
    this.lights.groundLight = new GridMaterial("groundMat", this.scene);
    this.lights.groundLight.majorUnitFrequency = 20;
    this.lights.groundLight.gridOffset = new Vector3(0, 0, 4);
    this.lights.groundLight.mainColor = new Color3(1, 1, 1);
    this.lights.groundLight.lineColor = new Color3(0, 0, 0);
    ground.material = this.lights.groundLight;
    ground.material.backFaceCulling = false;
    ground.checkCollisions = true;

    this.engine.loadingUIText = "Creating forest";
    this.forestActions = new ForestActions(this.scene);
    await this.forestActions.instantiateForest();
    this.forest = this.forestActions.forest;

    this.engine.loadingUIText = "Loading animations";
    this.animationsActions = new AnimationsActions(this.scene, this.forest);
    await this.animationsActions.initiateAnimation();
    this.koodibril = this.animationsActions.koodibril;

    this.textActions = new textActions(this.scene, this.canvas);

    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        navigator.userAgent
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
        navigator.userAgent.substr(0, 4)
      )
    ) {
      this.device = 2;
      // this.camera.position = new Vector3(0, 4, -7);
    } else {
      this.device = 1;
    }

    this.timeout = false;
    this.open = false;
    this.position = 12;
    this.wheely = 0;
    this.engine.loadingUIText = "";
    this.engine.loadingUIBackgroundColor = "rgb(1, 1, 1, 0.7)";
  }

  // this class use vertex to get the position on canvas in px of an object rendered
  public getPos(x: number, y: number): void {
    const temp = new Vector3();
    const vertices =
      this.textActions.bottomText.getBoundingInfo().boundingBox.vectorsWorld;
    const viewport = this.camera.viewport.toGlobal(
      this.engine.getRenderWidth(),
      this.engine.getRenderHeight()
    );
    let minX = 1e10,
      minY = 1e10,
      maxX = -1e10,
      maxY = -1e10;
    for (const vertex of vertices) {
      Vector3.ProjectToRef(
        vertex,
        Matrix.IdentityReadOnly,
        this.scene.getTransformMatrix(),
        viewport,
        temp
      );

      if (minX > temp.x) {
        minX = temp.x;
      }
      if (maxX < temp.x) {
        maxX = temp.x;
      }
      if (minY > temp.y) {
        minY = temp.y;
      }
      if (maxY < temp.y) {
        maxY = temp.y;
      }
    }
    const ofstX = this.canvas.offsetLeft,
      ofstY = this.canvas.offsetTop;
    const left = minX + ofstX;
    const top = minY + ofstY;
    const width = maxX - minX + left;
    const height = maxY - minY + top;
    if (x < left || x > width || y < top || y > height) {
      this.opener(0, 0);
    }
  }

  // class that is called outside of the rendering for listeners
  public animate(): void {
    const rendererLoopCallback = (): void => {
      this.forestActions.warp();
      this.scene.render();
    };

    if (document.readyState !== "loading") {
      this.engine.runRenderLoop(rendererLoopCallback);
    } else {
      window.addEventListener("DOMContentLoaded", () => {
        this.engine.runRenderLoop(rendererLoopCallback);
      });
    }

    // observable for scroll, click and doubleclick
    this.scene.onPointerObservable.add((pointerInfo) => {
      switch (pointerInfo.type) {
        case PointerEventTypes.POINTERMOVE:
          break;
        case PointerEventTypes.POINTERWHEEL:
          this.wheel((pointerInfo.event as WheelEvent).deltaY);
          break;
        case PointerEventTypes.POINTERTAP:
          if (!this.move && !this.loading && this.device === 1) {
            if (this.open) {
              this.getPos(pointerInfo.event.clientX, pointerInfo.event.clientY);
            } else {
              this.opener(
                this.forest.flowers.rows[this.position][0].meshe.position.x,
                this.forest.flowers.rows[this.position][0].meshe.position.y
              );
            }
          }
          break;
      }
    });

    window.addEventListener("wheel", (pointerInfo) => {
      console.log(pointerInfo.deltaY);
      console.log(pointerInfo.movementY);
    });

    // this will resize the scene if the canvas is resized
    window.addEventListener("resize", () => {
      this.engine.resize();
    });
  }

  // reset the position of the colibri at the center of the screen
  public reset(): void {
    this.setShow(false);
    this.koodibril.lastFly.stop();
    this.koodibril.lastFly.onAnimationEndObservable.clear();
    if (this.open) {
      this.animationsActions.retract_fast_flower(this.position);
      this.animationsActions.retract_pannel();
      this.textActions.bottomText.dispose();
      this.textActions.middleText.dispose();
      this.textActions.topText.dispose();
      this.open = false;
    }
    this.koodibril.animation[1].stop();
    this.koodibril.animation[0].start(true, 10);
    this.animationsActions.slideObject(
      this.koodibril.mesh,
      this.koodibril.mesh.position,
      new Vector3(0, 2, this.koodibril.mesh.position.z),
      2
    );
    this.animationsActions.fly();
    this.loading = false;
  }

  public goTo(appName: string): void {
    const nextPos = applications.findIndex((app) => app.name === appName);
    if (nextPos === -1) return;
    let travel = this.position;
    while (travel !== nextPos && travel < 40) {
      this.wheel(-120);
      travel++;
    }
  }

  // function that will add an animation to all mesh of the forest
  // sliding them frontward, or backward
  public wheel(delta: number): void {
    const direction = Math.sign(delta);
    if (this.open && !this.animationsActions.loading) {
      this.reset();
    }
    if (!this.animationsActions.loading) {
      if (direction === 1) {
        this.position = this.position === 0 ? 23 : this.position - 1;
      } else {
        this.position = this.position === 24 ? 1 : this.position + 1;
      }
      if (this.position === 24) {
        this.position = 0;
      }
      const flowerPos =
        this.forest.flowers.rows[this.position][0].meshe.position;
      this.setAppName({
        app: applications[this.position].name,
        side: flowerPos.x + (flowerPos.x < 0 ? 0.5 : -0.5) < 0,
      });
      this.move = true;
      let rollOver: Animatable | null = null;
      let toMove: Bush[] | Tree[] | Flower[] = [];
      // change day on direction
      // this.lightsAction.day(direction);
      for (let i = 0; i < 24; i++) {
        toMove = [
          ...this.forest.trees.rows[i],
          ...this.forest.bushes.rows[i],
          ...this.forest.flowers.rows[i],
        ];
        for (const element of toMove) {
          const position = element.meshe.position;
          rollOver = this.animationsActions.smoothSlideObject(
            element.meshe,
            position,
            new Vector3(
              position.x,
              position.y,
              (position.z as number) + delta / 10
            )
          );
        }
      }
      if (rollOver)
        rollOver.onAnimationEndObservable.add(() => {
          this.move = false;
          this.open = false;
        });
    }
  }

  // fonction that check if the flower can open (position of the colibri vs position of the flower)
  // will start all the animations relative to
  public opener(x: number, y: number): void {
    this.loading = true;
    const flowerPos = this.forest.flowers.rows[this.position][0].meshe.position;
    const xOffsetr = flowerPos.x < 0 ? 0.5 : 0.1;
    const xOffsetl = flowerPos.x < 0 ? 0.1 : 0.5;
    if (
      flowerPos.x >= x - xOffsetr &&
      flowerPos.x <= x + xOffsetl &&
      flowerPos.y >= y - 0.5 &&
      flowerPos.y <= y + 1 &&
      !this.open
    ) {
      this.koodibril.lastFly.stop();
      this.koodibril.lastFly.onAnimationEndObservable.clear();
      this.animationsActions.goToFlower(this.position);
      this.animationsActions.deploy_flower(this.position);
      this.animationsActions.deploy_pannel();
      setTimeout(() => {
        this.textActions.generateTopText(this.position);
      }, 150);
      setTimeout(() => {
        this.textActions.generateMiddleText(this.position);
      }, 250);
      setTimeout(() => {
        this.textActions.generateBottomText(this.setShow);
        this.open = true;
        this.loading = false;
      }, 350);
    } else if (
      (flowerPos.x <= x - xOffsetr ||
        flowerPos.x >= x + xOffsetl ||
        flowerPos.y <= y - 0.5 ||
        flowerPos.y >= y + 1) &&
      this.open
    ) {
      this.reset();
    }
  }

  // tried to change color of the forest on the forest on the run
  // public refreshColorGui(): void {
  //   this.guiAction.reset();
  //   this.guiAction.instantiateColorGui();
  //   this.guiAction.createColorPannel("Sun", this.lights.sunMesh);
  //   this.guiAction.createPBRColorPannel(
  //     "Bush",
  //     this.forest.bushes.front[0].color[0].subMeshes[0].getMesh(),
  //     false
  //   );
  //   this.guiAction.createPBRColorPannel(
  //     "FlowerTop",
  //     this.forest.flowers.front.color[1].subMeshes[0].getMesh(),
  //     true
  //   );
  //   this.guiAction.createPBRColorPannel(
  //     "FlowerBot",
  //     this.forest.flowers.front.color[2].subMeshes[0].getMesh(),
  //     true
  //   );
  //   this.guiAction.createTreeColorPannel("TreeBot", this.forest.trees, false);
  //   this.guiAction.createTreeColorPannel("TreeTop", this.forest.trees, true);
  //   this.guiAction.createFogColorPannel();
  //   this.guiAction.createAmbiantColorPannel();
  // }
}
