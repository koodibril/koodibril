import {
  Scene,
  SceneLoader,
  Vector3,
  Animation,
  Animatable,
  AbstractMesh,
  AnimationGroup,
  CubicEase,
  EasingFunction,
  Mesh,
} from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
import { Forest } from "./Forest";

export interface Koodibril {
  mesh: AbstractMesh;
  leftoright: boolean;
  animation: AnimationGroup[];
  material: AbstractMesh;
  lastFly: Animatable;
}

export class AnimationsActions {
  // true is the flower is opening and until she is fully open
  public loading!: boolean;
  // the colibri mesh, used for deplacement
  public koodibril!: Koodibril;
  public constructor(private scene: Scene, private forest: Forest) {}

  public async initiateAnimation(): Promise<void> {
    this.koodibril = <Koodibril>{};
    const colibri = await SceneLoader.ImportMeshAsync(
      "",
      "/assets/models/",
      "koodibril.glb",
      this.scene
    );
    colibri.animationGroups[0].stop();
    colibri.animationGroups[0].start(true, 10.0);
    this.koodibril.mesh = colibri.meshes[0];
    this.koodibril.material = colibri.meshes[1];
    this.koodibril.animation = colibri.animationGroups;
    this.koodibril.mesh.scaling.scaleInPlace(0.13);
    this.koodibril.mesh.position.y = 2;
    this.koodibril.mesh.position.z = 0;
    this.koodibril.mesh.rotate(new Vector3(0, 1, 0), 1.5 * Math.PI);
    this.koodibril.leftoright = true;
    this.loading = false;
    this.fly();
  }

  // general fonction used to slide an object in 3 axis
  public slideObject(
    object: AbstractMesh | Mesh,
    from: Vector3,
    to: Vector3
  ): Animatable {
    const frameRate = 10;
    const xkeyFrames = [
      {
        frame: 0,
        value: from.x,
      },
      {
        frame: frameRate,
        value: to.x,
      },
    ];
    const ykeyFrames = [
      {
        frame: 0,
        value: from.y,
      },
      {
        frame: frameRate,
        value: to.y,
      },
    ];
    const zkeyFrames = [
      {
        frame: 0,
        value: from.z,
      },
      {
        frame: frameRate,
        value: to.z,
      },
    ];

    const xSlide = new Animation(
      "xSlide",
      "position.x",
      frameRate,
      Animation.ANIMATIONTYPE_FLOAT
    );
    const ySlide = new Animation(
      "ySlide",
      "position.y",
      frameRate,
      Animation.ANIMATIONTYPE_FLOAT
    );
    const zSlide = new Animation(
      "zSlide",
      "position.z",
      frameRate,
      Animation.ANIMATIONTYPE_FLOAT
    );

    xSlide.setKeys(xkeyFrames);
    ySlide.setKeys(ykeyFrames);
    zSlide.setKeys(zkeyFrames);

    const easingFunction = new CubicEase();
    easingFunction.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT);
    xSlide.setEasingFunction(easingFunction);
    ySlide.setEasingFunction(easingFunction);
    zSlide.setEasingFunction(easingFunction);

    object.animations.push(xSlide, ySlide, zSlide);
    return this.scene.beginAnimation(object, 0, frameRate, false, 2);
  }

  public smoothSlideObject(
    object: AbstractMesh,
    from: Vector3,
    to: Vector3,
    delta: number
  ): Animatable | null {
    if (object.animations.length > 0) {
      if (object.animations[0].runtimeAnimations[0].currentFrame > 80)
        return null;
      object.animations[0].runtimeAnimations[0].reset(false);
      const currentKeys = object.animations[0].getKeys();
      currentKeys[1].value += delta / 100;
      if (currentKeys[1].value < -44) {
        currentKeys[0].value += 96;
        currentKeys[1].value += 96;
      } else if (currentKeys[1].value > 52) {
        currentKeys[0].value -= 96;
        currentKeys[1].value -= 96;
      }
      return null;
    }
    const zkeysSmooth = [
      {
        frame: 0,
        value: from.z,
      },
      {
        frame: 120,
        value: to.z,
      },
    ];

    const zSlide = new Animation(
      "zSlideEasingAnimation",
      "position.z",
      30,
      Animation.ANIMATIONTYPE_FLOAT
    );
    zSlide.setKeys(zkeysSmooth);
    const easingFunction = new CubicEase();
    easingFunction.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT);
    zSlide.setEasingFunction(easingFunction);
    object.animations.push(zSlide);
    const animatable = this.scene.beginAnimation(object, 0, 120, false, 3);
    animatable.onAnimationEndObservable.addOnce(() => {
      object.animations.pop();
    });
    return animatable;
  }

  // generate random movements for the colibri, will call itself at the end of the last animations
  // to stop the fly always clean all observables, if not you will have double fly wich makes it jumpy
  public fly(): void {
    const frameRate = 20;
    const xtravel = Math.floor(Math.random() * (3 - -2 + 1)) + -2;
    const ytravel = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (
      this.koodibril.mesh.position.x > xtravel &&
      !this.koodibril.leftoright
    ) {
      this.koodibril.mesh.rotate(new Vector3(0, 1, 0), Math.PI);
      this.koodibril.leftoright = true;
    } else if (
      this.koodibril.mesh.position.x < xtravel &&
      this.koodibril.leftoright
    ) {
      this.koodibril.mesh.rotate(new Vector3(0, 1, 0), Math.PI);
      this.koodibril.leftoright = false;
    }
    const xkeyFrames = [
      {
        frame: 0,
        value: this.koodibril.mesh.position.x,
      },
      {
        frame: 10,
        value: xtravel,
      },
      {
        frame: 20,
        value: xtravel,
      },
    ];
    const ykeyFrames = [
      {
        frame: 0,
        value: this.koodibril.mesh.position.y,
      },
      {
        frame: 10,
        value: ytravel,
      },
      {
        frame: 20,
        value: ytravel,
      },
    ];

    const xSlide = new Animation(
      "xFly",
      "position.x",
      frameRate,
      Animation.ANIMATIONTYPE_FLOAT
    );
    const ySlide = new Animation(
      "yFly",
      "position.y",
      frameRate,
      Animation.ANIMATIONTYPE_FLOAT
    );

    xSlide.setKeys(xkeyFrames);
    ySlide.setKeys(ykeyFrames);
    const animations = [xSlide, ySlide];
    this.koodibril.lastFly = this.scene.beginDirectAnimation(
      this.koodibril.mesh,
      animations,
      0,
      frameRate,
      false,
      1
    );
    this.koodibril.lastFly.onAnimationEndObservable.addOnce(() => {
      this.fly();
    });
  }

  // animate the colibri to go to the flower
  public goToFlower(position: number): void {
    this.koodibril.lastFly.stop();
    this.koodibril.lastFly.onAnimationEndObservable.clear();
    const flowerPos = this.forest.flowers.rows[position][0].meshe.position;
    if (flowerPos.x < 0 && !this.koodibril.leftoright) {
      this.koodibril.mesh.rotate(new Vector3(0, 1, 0), Math.PI);
      this.koodibril.leftoright = true;
    }
    if (flowerPos.x > 0 && this.koodibril.leftoright) {
      this.koodibril.mesh.rotate(new Vector3(0, 1, 0), Math.PI);
      this.koodibril.leftoright = false;
    }
    this.slideObject(
      this.koodibril.mesh,
      this.koodibril.mesh.position,
      new Vector3(
        flowerPos.x + (flowerPos.x < 0 ? 0.7 : -0.7),
        1.7,
        flowerPos.z
      )
    ).onAnimationEndObservable.add(() => {
      this.koodibril.animation[0].stop();
      this.koodibril.animation[1].start(true, 0.5);
    });
  }

  // stop all flower animations
  public stop_flower(position: number): void {
    this.forest.flowers.rows[position][0].animations.forEach((element) => {
      element.stop();
    });
  }

  // launch the flower animations
  public deploy_flower(position: number): AnimationGroup {
    this.stop_flower(position);
    return this.forest.flowers.rows[position][0].animations[2].start(false, 1);
  }

  // close the flower beautifully
  public retract_flower(position: number): void {
    this.stop_flower(position);
    this.forest.flowers.rows[position][0].animations[0].start(false, 1);
  }

  // close the flower fast, called whith scroll
  public retract_fast_flower(position: number): void {
    this.forest.flowers.rows[position][0].animations[0].start(false, 1);
  }
}
