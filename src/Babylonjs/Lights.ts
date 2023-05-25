import { GridMaterial } from "@babylonjs/materials";
import {
  Scene,
  MeshBuilder,
  Color4,
  Vector3,
  Color3,
  StandardMaterial,
  SpotLight,
  Mesh,
  ParticleSystem,
  Texture,
  DirectionalLight,
  GlowLayer,
  HemisphericLight,
} from "@babylonjs/core";

export interface Sun {
  light: DirectionalLight;
  mesh: Mesh;
  material: StandardMaterial;
}
export interface Moon {
  light: DirectionalLight;
  mesh: Mesh;
  material: StandardMaterial;
}

export interface Lights {
  sun: Sun;
  moon: Moon;
  groundLight: GridMaterial;
  koodibrilLight: HemisphericLight;
}

export class LightsActions {
  // store all lights
  public lights!: Lights;
  public stars!: Mesh[];
  // set the hour of the day on 24
  private hour!: number;
  private firefly!: boolean;
  private particles!: ParticleSystem[];
  private glow!: GlowLayer;

  public constructor(private scene: Scene) {}

  // create all lights and the sun/moon
  public instantiateLights(): void {
    this.lights = <Lights>{};
    this.hour = 0;
    this.firefly = false;
    this.particles = [];
    this.stars = [];
    this.glow = new GlowLayer("glow", this.scene);
    this.glow.intensity = 1;
    this.lights.koodibrilLight = new HemisphericLight(
      "hemiLight",
      new Vector3(-1, 1, 0),
      this.scene
    );
    this.lights.koodibrilLight.diffuse = new Color3(1, 1, 1);
    this.lights.koodibrilLight.specular = new Color3(1, 1, 1);
    this.lights.koodibrilLight.groundColor = new Color3(1, 1, 1);
    this.lights.koodibrilLight.intensity = 0.1;
    this.instantiateStars();
    this.instantiateSun();
    this.instantiateMoon();
  }

  public instantiateSun(): void {
    this.lights.sun = <Sun>{};
    this.lights.sun.light = new DirectionalLight(
      "sunLight",
      new Vector3(0, -1, 0),
      this.scene
    );
    this.lights.sun.material = new StandardMaterial("redMat", this.scene);
    this.lights.sun.material.emissiveColor = new Color3(1, 0.5, 0.5);
    this.lights.sun.light.intensity = 0.01;
    this.lights.sun.mesh = MeshBuilder.CreateIcoSphere("sunMesh", {
      radius: 5,
    });
    this.lights.sun.mesh.material = this.lights.sun.material;
    this.lights.sun.light.parent = this.lights.sun.mesh;
    this.lights.sun.mesh.position = new Vector3(0, 20, 4);
    this.lights.sun.mesh.applyFog = false;
  }

  public instantiateMoon(): void {
    this.lights.moon = <Moon>{};
    this.lights.moon.light = new DirectionalLight(
      "moonLight",
      new Vector3(0, -1, 0),
      this.scene
    );
    this.lights.moon.material = new StandardMaterial("moonMat", this.scene);
    this.lights.moon.material.emissiveColor = new Color3(1, 1, 1);
    this.lights.moon.light.intensity = 1;
    this.lights.moon.mesh = MeshBuilder.CreateIcoSphere("moonMesh", {
      radius: 3,
    });
    this.lights.moon.mesh.material = this.lights.moon.material;
    this.lights.moon.light.parent = this.lights.moon.mesh;
    this.lights.moon.mesh.position = new Vector3(0, -24, 40);
    this.lights.moon.mesh.applyFog = false;
  }

  public instantiateStars(): void {
    for (let i = 0; i < 200; i++) {
      const light = new SpotLight(
        "starLight",
        Vector3.Zero(),
        new Vector3(0, -1, 0),
        Math.PI,
        10,
        this.scene
      );
      const whiteMat = new StandardMaterial("whiteMat", this.scene);
      whiteMat.emissiveColor = new Color3(1, 1, 1);
      light.intensity = 1;
      const starMesh = MeshBuilder.CreateIcoSphere("starMesh", {
        radius: (Math.floor(Math.random() * (10 - 1 + 1)) + 1) / 100,
      });
      starMesh.material = whiteMat;
      light.parent = starMesh;
      starMesh.position = new Vector3(
        Math.floor(Math.random() * (40 - -40 + 1)) + -40,
        Math.floor(Math.random() * (20 - 1 + 1)) + 1,
        50
      );
      starMesh.applyFog = false;
      this.stars.push(starMesh);
    }
  }

  // at each hour will set the position and the intensity of each lights
  // sunset at 18
  public day(hour: number): void {
    this.setFocus();
    this.hour = ((hour * -1 + 48) / 96) * 24;
    const sun_ang = this.hour * (Math.PI / 12);
    const sun_y = (0 + 24 * Math.cos(sun_ang)) * -2;
    const sun_z = (4 + 24 * Math.sin(sun_ang)) * -2;
    let luminosity = sun_y / 48;
    if (this.hour <= 18 || this.hour >= 6) luminosity += 0.5;
    if (luminosity >= 1) luminosity = 1;
    this.setFirefly();
    const sunPos = new Vector3(0, sun_y, sun_z);
    const moonPos = new Vector3(sun_z / 2, (sun_y * -1) / 5, 40);
    this.lights.sun.mesh.setAbsolutePosition(sunPos);
    this.lights.moon.mesh.setAbsolutePosition(moonPos);
    if (luminosity < 0.375) {
      luminosity = 0.375;
    }
    this.glow.intensity = luminosity;
    this.sunset(luminosity);
    this.lights.groundLight.mainColor = new Color3(
      1 * luminosity,
      1 * luminosity,
      1 * luminosity
    );
  }

  private sunset(luminosity: number): void {
    if (this.hour >= 16.6 && this.hour <= 18.4) {
      luminosity += 0.5;
      this.scene.fogColor = new Color3(
        0.9 * luminosity,
        0.5 * luminosity,
        0.5 * luminosity
      );
      this.scene.clearColor = new Color4(
        0.9 * luminosity,
        0.5 * luminosity,
        0.5 * luminosity,
        1
      );
    } else {
      this.scene.fogColor = new Color3(
        1 * luminosity,
        1 * luminosity,
        1 * luminosity
      );
      this.scene.clearColor = new Color4(
        1 * luminosity,
        1 * luminosity,
        1 * luminosity,
        1
      );
    }
  }

  public setFirefly(): void {
    if (!this.firefly && (this.hour >= 20 || this.hour <= 5)) {
      this.firefly = true;
      for (let z = 0; z <= 8; z = z + 4) {
        for (let x = -3; x <= 6; x = x + 3) {
          const particleSystem = new ParticleSystem("particles", 5, this.scene);
          particleSystem.particleTexture = new Texture(
            "/assets/textures/flare.png",
            this.scene
          );
          particleSystem.emitter = new Vector3(x, 0, z);
          particleSystem.color1 = new Color4(0, 1.0, 0, 1.0);
          particleSystem.color2 = new Color4(0, 1.0, 0, 1.0);
          particleSystem.gravity = new Vector3(
            Math.random() * (0.5 - -0.5) + -0.5,
            Math.random() * (0 - 0.3) + -0.3,
            0
          );
          particleSystem.minSize = 0.1;
          particleSystem.maxSize = 0.1;
          particleSystem.emitRate = 1;
          particleSystem.minLifeTime = 4;
          particleSystem.maxLifeTime = 4;
          particleSystem.start();
          this.particles.push(particleSystem);
        }
      }
    } else if (this.hour > 5 && this.hour < 20) {
      this.particles.forEach((element) => {
        element.stop();
      });
      this.firefly = false;
      this.particles = [];
    }
  }

  public setFocus(): void {
    this.lights.sun.light.setDirectionToTarget(new Vector3(0, 0, 0));
  }
}
