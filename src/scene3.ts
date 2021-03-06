import { SCENE_MGR, ROOT_SCENE_VISIBILITY_STRATEGY, ROOT_SCENE_ADD_TO_ENGINE_ON_SCENE_LOAD } from "./globals"
import { BaseEntityWrapper, SubScene, VisibilityStrategyEnum } from "./modules/sceneMgmt/subScene"
import { SceneVector3Type, SpawnPoint } from "./modules/sceneMgmt/types"
import { createDispenser } from "./museum_template/booth/dispenser"
import { addElevator } from "./museum_template/modules/elevator"
import { addLogo } from "./museum_template/modules/logo"
import { addNFTImage } from "./museum_template/modules/nftImage"
import { addSculpture } from "./museum_template/modules/sculpture"
import { addSocialLink } from "./museum_template/modules/socialLink"
import { addVideoScreen } from "./museum_template/modules/videoScreen"
import { createSubScene } from "./utils"

type SceneObjs={
  scene:Entity
  pivotScene:Entity
  screen:Entity
}

 function createScene():SceneObjs{
    
  const _scene3 = new Entity('_scene3')
  if(ROOT_SCENE_ADD_TO_ENGINE_ON_SCENE_LOAD) engine.addEntity(_scene3)
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

  const screen = addVideoScreen(pivotScene)

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




  return { scene: _scene3, pivotScene:pivotScene,screen:screen }
}

function createDynamicScene(sceneObjs:SceneObjs, subScene: SubScene) {

  const _scene3 = sceneObjs.scene
  const pivotScene = sceneObjs.pivotScene

  subScene.addOnInitListener(()=>{
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
  })
  
}

export function createScene3(){
  const sceneObjs = createScene()
 
  const _scene3 = sceneObjs.scene

  const galleryGroup3Base_ID = SCENE_MGR.generateSceneId()
  const galleryGroupBase3 = new SubScene(galleryGroup3Base_ID,"sceneGroupBase3",[],undefined,undefined)

  const sceneEntity = galleryGroupBase3.addEntity(_scene3) 
  sceneEntity.visibilityStrategy = ROOT_SCENE_VISIBILITY_STRATEGY

  createDynamicScene(sceneObjs,galleryGroupBase3)

  sceneEntity.addOnInitListener( (entityWrap:BaseEntityWrapper)=>{
    if(!sceneEntity.rootEntity.alive) engine.addEntity( sceneEntity.rootEntity )
  } )
  sceneEntity.addOnHideListener( (entityWrap:BaseEntityWrapper)=>{
    log("_scene3 stop playing video if still playing when hidden")   
    
    const vidtexture = sceneObjs.screen.getComponent(Material).albedoTexture as VideoTexture
    vidtexture.playing = false
    
  } )
  sceneEntity.addOnShowListener( (entityWrap:BaseEntityWrapper)=>{
    //(sceneObjs.screen.getComponent(Material).albedoTexture as VideoTexture).playing = true
  } )
  SCENE_MGR.addScene(galleryGroupBase3)



  return galleryGroupBase3
}