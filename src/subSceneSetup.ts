import * as utils from '@dcl/ecs-scene-utils'
import { nftCollection, createPainting } from './nfts'
import { SceneInitData, SceneManager } from './modules/sceneMgmt/sceneManager';
import { BaseEntityWrapper, SceneEntity, SubScene, SubSceneGroup, VisibilityStrategyEnum } from './modules/sceneMgmt/subScene'
import { createScene1 } from './builderStaticContent_scene1';
import { createScene2 } from './builderStaticContent_scene2';
import { createScene3 } from './builderStaticContent_scene3';
import { SCENE_MGR } from './globals';
import { createScene4 } from './builderStaticContent_scene4';




const galleryGroup1 = createScene1()
//const _scene1 = loadStaticScene1()
const galleryGroup2 = createScene2()
const galleryGroup3 = createScene3()
const galleryGroup4 = createScene4()


galleryGroup1.enable()
galleryGroup1.hide()
SCENE_MGR.changeToScene(galleryGroup1)

let toggleCnter = 1



const toggleEntText = new Entity()
const toggleTextShape = new TextShape("Change To\nScene 2")
toggleTextShape.fontSize = 2
toggleEntText.addComponent(toggleTextShape)
toggleEntText.addComponent(new Transform(
  {position:new Vector3(8,2,16)}
)) 
toggleEntText.addComponent(new Billboard())
engine.addEntity(toggleEntText) 

const toggleEnt = new Entity()
engine.addEntity(toggleEnt) 
toggleEnt.addComponent(new GLTFShape('models/KeyboardSciFi_01/KeyboardSciFi_01.glb'))
//toggleEnt.addComponent(new BoxShape())
toggleEnt.addComponent(new Transform(
  {
    position:new Vector3(8,0,16),
    scale:new Vector3(1.2,1.2,1.2),
    rotation: Quaternion.Euler(0,270,0)
  }
  
)) 
toggleEnt.addComponent(new OnPointerDown(()=>{
  
  switch(toggleCnter){
    case 0:
      SCENE_MGR.changeToScene(galleryGroup1)
      
      toggleTextShape.value = "Change To\nScene 2"
      toggleEnt.getComponent(OnPointerDown).hoverText = toggleTextShape.value
      break;
    case 1:
      SCENE_MGR.changeToScene(galleryGroup2)

      toggleTextShape.value = "Change To\nScene 3"
      toggleEnt.getComponent(OnPointerDown).hoverText = toggleTextShape.value
      break;
    case 2:
      SCENE_MGR.changeToScene(galleryGroup3)

      toggleTextShape.value = "Change To\nScene 4"
      toggleEnt.getComponent(OnPointerDown).hoverText = toggleTextShape.value
      
      break;
    case 3:
      SCENE_MGR.changeToScene(galleryGroup4)
      galleryGroup4.movePlayerHere()

      toggleTextShape.value = "Change To\nScene 1"
      toggleEnt.getComponent(OnPointerDown).hoverText = toggleTextShape.value
      
      break;
      
  }

  toggleCnter++
  if(toggleCnter >= 4){
    toggleCnter = 0
  }
  //debugger
  //SCENE_MGR.changeToScene(galleryGroup2)
  
},{
  hoverText: toggleTextShape.value
}))

for (const nft of nftCollection) {
  
  const scene = SCENE_MGR.getSceneById(nft.room)
 
  if(scene){
    log("scene.nft.adding paintings",scene.id,scene.name)
    scene.addOnInitListener((entityWrapper:BaseEntityWrapper)=>{
      log("scene.init.called.adding paintings",scene.id,nft)
       
      //const parent = new Entity("painting-parent-"+scene.id)
      //engine.addEntity(parent)

      const painting = createPainting(
        undefined,
        nft.id,
        nft.position,
        nft.contract, 
        nft.tokenId 
      )
      //engine.addEntity(painting)
 
      //scene.
      const sceneEnt = scene.addEntity(painting,{
        onInit:(entity:SceneEntity)=>{
          log("scene.ent.init.called.on",scene.id,entity.name,nft)
          
          //add to engine when needed
          if(sceneEnt.visibilityStrategy == VisibilityStrategyEnum.SHAPE_SHOW_HIDE ) engine.addEntity(painting)
        }
      }) 
      sceneEnt.visible = scene.visible
      sceneEnt.enabled = scene.enabled


      sceneEnt.addOnInitListener((entityWrap)=>{
        log("painting.hidden ",nft.id)
        //engine.addEntity(painting)
      })
      sceneEnt.addOnShowListener((entityWrap)=>{
        log("painting.showed ",nft.id)
        //engine.addEntity(painting)
      }) 
      sceneEnt.addOnHideListener((entityWrap)=>{
        log("painting.hidden ",nft.id)
        //engine.addEntity(painting)
      })
      
      sceneEnt.visibilityStrategy = VisibilityStrategyEnum.ENGINE_ADD_REMOVE
    })
  }else{
    log("could not find scene",nft.room)
  }
}
  