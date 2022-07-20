import { SCENE_MGR } from "./globals"
import { SubScene, VisibilityStrategyEnum } from "./modules/sceneMgmt/subScene"
import { SceneVector3Type, SpawnPoint } from "./modules/sceneMgmt/types"
import { createDispenser } from "./museum_template/booth/dispenser"
import { addElevator } from "./museum_template/modules/elevator"
import { addLogo } from "./museum_template/modules/logo"
import { addNFTImage } from "./museum_template/modules/nftImage"
import { addSculpture } from "./museum_template/modules/sculpture"
import { addSocialLink } from "./museum_template/modules/socialLink"
import { addVideoScreen } from "./museum_template/modules/videoScreen"


export function loadStaticScene4(){
    
  const _scene4 = new Entity('_scene4')
  engine.addEntity(_scene4)
  const transformScene3 = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  _scene4.addComponentOrReplace(transformScene3)


  const pivotScene = new Entity()
  pivotScene.addComponent(new Transform({
    position: new Vector3(16, 0, 18),
    rotation: Quaternion.Euler(0,270,0),
  }))
  pivotScene.setParent(_scene4)


  const platform = new Entity()
  platform.setParent(pivotScene)
  platform.addComponent(new GLTFShape('models/Platform_Pirates_Alt.glb'))
  platform.addComponentOrReplace( new Transform({
    position: new Vector3(0, 8, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(8, 1, 8)
  }))



  const toggleEntText = new Entity()
  toggleEntText.setParent(_scene4)
  const toggleTextShape = new TextShape("Move to scene")
  toggleTextShape.fontSize = 2
  toggleEntText.addComponent(toggleTextShape)
  toggleEntText.addComponent(new Transform(
    {position:new Vector3(8,2,16-2)}
  )) 
  toggleEntText.addComponent(new Billboard())
  engine.addEntity(toggleEntText) 

  return _scene4
}
 
export function createScene4(){
  const _scene4 = loadStaticScene4()
 

  const galleryGroup4Base_ID = SCENE_MGR.generateSceneId()
  const galleryGroupBase4 = new SubScene(galleryGroup4Base_ID,"sceneGroupBase4",[],undefined,undefined)

  galleryGroupBase4.spawnPoints.push(
    new SpawnPoint( {
      name:"in the sky",
      position: new SceneVector3Type( [14,14],[12,12],[16,16] )
    })
  )

  const sceneEntity = galleryGroupBase4.addEntity(_scene4) 
  sceneEntity.visibilityStrategy = VisibilityStrategyEnum.ENGINE_ADD_REMOVE

  SCENE_MGR.addScene(galleryGroupBase4)


  const toggleEnt = new Entity()
  toggleEnt.setParent(_scene4)
  engine.addEntity(toggleEnt) 
  toggleEnt.addComponent(new GLTFShape('models/KeyboardSciFi_01/KeyboardSciFi_01.glb'))
  //toggleEnt.addComponent(new BoxShape())
  toggleEnt.addComponent(new Transform(
    {
      position:new Vector3(8,0,16-2),
      scale:new Vector3(1.2,1.2,1.2),
      rotation: Quaternion.Euler(0,270,0)
    }
    
  )) 
  toggleEnt.addComponent(new OnPointerDown(()=>{
    galleryGroupBase4.movePlayerHere()
  }))
  




  return galleryGroupBase4
}