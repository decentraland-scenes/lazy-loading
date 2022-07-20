import { SCENE_MGR } from "./globals"
import { SubScene } from "./modules/sceneMgmt/subScene"
import { createDispenser } from "./museum_template/booth/dispenser"
import { addElevator } from "./museum_template/modules/elevator"
import { addLogo } from "./museum_template/modules/logo"
import { addNFTImage } from "./museum_template/modules/nftImage"
import { addSculpture } from "./museum_template/modules/sculpture"
import { addSocialLink } from "./museum_template/modules/socialLink"
import { addVideoScreen } from "./museum_template/modules/videoScreen"


export function loadStaticScene3(){
    
  const _scene3 = new Entity('_scene3')
  engine.addEntity(_scene3)
  const transformScene3 = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  _scene3.addComponentOrReplace(transformScene3)





  const pivotScene = new Entity()
  pivotScene.addComponent(new Transform({
    position: new Vector3(24, 0, 18),
    rotation: Quaternion.Euler(0,270,0),
  }))
  pivotScene.setParent(_scene3)

  const building = new Entity()
  building.setParent(_scene3)
  const transformBuilding11 = new Transform({
    position: new Vector3(24, 0, 18),
    rotation: Quaternion.Euler(0,270,0),
    scale: new Vector3(1, 1, 1)
  })
  building.addComponentOrReplace(transformBuilding11)
  building.addComponent(new GLTFShape("models/museum/building.glb"))


  //addBuilding()
  addElevator(pivotScene)
  addLogo(pivotScene)
  addSculpture(pivotScene)
  addNFTImage(pivotScene)
  addSocialLink(pivotScene)
  addVideoScreen(pivotScene)

  // change the eventUUID to your event
  // check following links about how to setup POAP event
  // https://docs.decentraland.org/development-guide/poap-tokens/
  // https://github.com/decentraland-scenes/POAP-Booth
  /*createDispenser(
      _scene3,
      {
          position: new Vector3(8 + 5.5, 7.32, 8),
          rotation: Quaternion.Euler(0, -90, 0)
      },
      'acd27e4b-24bd-4040-b715-c0e11e863fb0'
  )*/




  return _scene3
}

export function createScene3(){
  const _scene3 = loadStaticScene3()
 

  const galleryGroup3Base_ID = SCENE_MGR.generateSceneId()
  const galleryGroupBase3 = new SubScene(galleryGroup3Base_ID,"sceneGroupBase3",[],undefined,undefined)
  galleryGroupBase3.addEntity(_scene3)
  //galleryGroupBase3.visibilityStrategy = VisibilityStrategyEnum.ENGINE_ADD_REMOVE
  SCENE_MGR.addScene(galleryGroupBase3)



  return galleryGroupBase3
}