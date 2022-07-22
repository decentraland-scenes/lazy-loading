import { SceneManager } from "./modules/sceneMgmt/sceneManager";
import { VisibilityStrategyEnum } from "./modules/sceneMgmt/subScene";

export const SCENE_MGR = new SceneManager(); 
 
export const ROOT_SCENE_VISIBILITY_STRATEGY = VisibilityStrategyEnum.SHAPE_SHOW_HIDE
export const ROOT_SCENE_ADD_TO_ENGINE_ON_SCENE_LOAD = true
 
export const INVISIBLE_MATERIAL = new BasicMaterial();
const INVISIBLE_MATERIAL_texture = new Texture(
  "images/transparent-texture.png"
);
INVISIBLE_MATERIAL.texture = INVISIBLE_MATERIAL_texture;
INVISIBLE_MATERIAL.alphaTest = 1;