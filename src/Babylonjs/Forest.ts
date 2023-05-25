import {
  Scene,
  SceneLoader,
  Vector3,
  AbstractMesh,
  AnimationGroup,
  AssetContainer,
  Engine,
} from "@babylonjs/core";
import "@babylonjs/loaders/glTF";

export interface Flower {
  animations: AnimationGroup[];
  meshe: AbstractMesh;
  color: AbstractMesh[];
}

export interface Bush {
  animations: AnimationGroup[];
  meshe: AbstractMesh;
  color: AbstractMesh[];
}

export interface Tree {
  animations: AnimationGroup[];
  meshe: AbstractMesh;
  color: AbstractMesh[];
}

export interface Trees {
  rows: Tree[][];
}

export interface Bushes {
  rows: Bush[][];
}

export interface Flowers {
  rows: Flower[][];
}

export interface Forest {
  trees: Trees;
  flowers: Flowers;
  bushes: Bushes;
}

export class ForestActions {
  // store all forest mesh and animation
  public forest!: Forest;
  // store the flower.glb for fast loading
  private flower!: AssetContainer;
  // store the 9 trees.glb for fast loading
  private trees!: AssetContainer[];
  // store the 4 bush.glb for fast loading
  private bushes!: AssetContainer[];
  // store the pannel.glb for fast loading
  private pannel!: AssetContainer;

  public constructor(private scene: Scene, private engine: Engine) {}

  // instantiate the forest object before filling it
  public async instantiateForest(): Promise<void> {
    this.forest = <Forest>{};
    this.forest.trees = <Trees>{};
    this.forest.bushes = <Bushes>{};
    this.forest.flowers = <Flowers>{};

    this.forest.trees.rows = new Array(24).fill(0);
    this.forest.trees.rows = this.forest.trees.rows.map(() => {
      return [];
    });
    this.forest.bushes.rows = new Array(24).fill(0);
    this.forest.bushes.rows = this.forest.bushes.rows.map(() => {
      return [];
    });
    this.forest.flowers.rows = new Array(24).fill(0);
    this.forest.flowers.rows = this.forest.flowers.rows.map(() => {
      return [];
    });

    await this.importforest();
    this.seed();
  }

  // import all forest.glb and store them for fast loading
  public async importforest(): Promise<void> {
    this.engine.loadingUIText = "Loading flowers";
    this.flower = await SceneLoader.LoadAssetContainerAsync(
      "/assets/models/",
      "flower.glb",
      this.scene
    );
    this.engine.loadingUIText = "Loading pannel";
    this.pannel = await SceneLoader.LoadAssetContainerAsync(
      "/assets/models/",
      "pannel.glb",
      this.scene
    );
    this.trees = [];
    this.bushes = [];
    for (let i = 1; i < 10; i++) {
      this.engine.loadingUIText = "Loading tree " + i.toString() + "/9";
      this.trees[i] = await SceneLoader.LoadAssetContainerAsync(
        "/assets/models/forest/tree/",
        "tree" + i.toString() + ".glb",
        this.scene
      );
      if (i < 5) {
        this.engine.loadingUIText = "Loading bush " + i.toString() + "/4";
        this.bushes[i] = await SceneLoader.LoadAssetContainerAsync(
          "/assets/models/forest/bush/",
          "bush" + i.toString() + ".glb",
          this.scene
        );
      }
    }
  }

  // create the forest on 23 rows
  public seed(): void {
    for (let row = 0; row < 24; row++) {
      const z = row * 4 - 48;
      const random_tree = this.shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      const position_tree = this.shuffleArray([-3, -6, 3, 5]);
      const random_bush = this.shuffleArray([1, 2, 3, 4]);

      for (let i = 0; i < 4; i++) {
        this.addtree(new Vector3(position_tree[i], 0, z), row, random_tree[i]);
      }
      this.addbush(
        new Vector3(0, 0, z),
        row,
        random_bush[this.getRandomInt(0, 3)]
      );
      this.addflower(new Vector3(Math.random() * (2 - -2) + -2, 1.5, z), row);
    }
  }

  private getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // suffle method for selecting randomly trees, or bushes
  public shuffleArray(array: Array<number>): Array<number> {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // add another instance of a flower in the forest
  public addflower(position: Vector3, row: number): void {
    const flowerImport = this.flower.instantiateModelsToScene();
    const flower = <Flower>{};
    flower.color = flowerImport.rootNodes[0].getChildMeshes();
    (flower.animations = flowerImport.animationGroups),
      (flower.meshe = flowerImport.rootNodes[0] as AbstractMesh);
    flower.animations[0].stop();
    flower.animations[0].start(false, 10.0);
    flower.animations[5].start(false, 10.0);
    flower.animations[3].start(false, 10.0);
    flower.meshe.scaling.scaleInPlace(0.2);
    flower.meshe.rotate(
      new Vector3(0, 1, 0),
      position.x < 0 ? Math.PI * 1.5 : Math.PI / 2
    );
    flower.meshe.position = position;
    flower.meshe.name = "flower";
    flower.meshe.checkCollisions = true;
    this.forest.flowers.rows[row].push(flower);
  }

  // add another instance of bush on the forest
  public addbush(position: Vector3, row: number, mesh: number): void {
    const bushImport = this.bushes[mesh].instantiateModelsToScene();
    const bush = <Bush>{};
    bush.animations = bushImport.animationGroups;
    bush.color = bushImport.rootNodes[0].getChildMeshes();
    bush.meshe = bushImport.rootNodes[0] as AbstractMesh;
    bush.animations[0].goToFrame(0);
    bush.animations[0].stop();
    bush.animations[1].start(false, 10.0);
    bush.meshe.scaling.scaleInPlace(2.5);
    bush.meshe.rotate(
      new Vector3(0, 1, 0),
      Math.random() > 0.5 ? Math.PI * 1.5 : Math.PI / 2
    );
    bush.meshe.position = position;
    bush.meshe.name = "bush";
    bush.meshe.checkCollisions = true;
    this.forest.bushes.rows[row].push(bush);
  }

  // add another instance of a tree in the forest
  public addtree(position: Vector3, row: number, mesh: number): void {
    const treeImport = this.trees[mesh].instantiateModelsToScene();
    const tree = <Tree>{};
    (tree.animations = treeImport.animationGroups),
      (tree.color = treeImport.rootNodes[0].getChildMeshes().sort());
    tree.meshe = treeImport.rootNodes[0] as AbstractMesh;
    tree.animations[0].goToFrame(0);
    tree.animations[0].stop();
    tree.animations.sort();
    tree.animations[1].start(false, 10.0);
    tree.animations[3].start(false, 10.0);
    tree.meshe.scaling.scaleInPlace(Math.random() * (4 - 1.5) + 1.5);
    tree.meshe.checkCollisions = true;
    tree.meshe.rotate(new Vector3(0, 1, 0), Math.random() * Math.PI * 2);
    tree.meshe.position = position;
    tree.meshe.name = "tree";
    this.forest.trees.rows[row].push(tree);
  }
}
