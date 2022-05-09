import * as utils from '@dcl/ecs-scene-utils'
import { nftCollection, createPainting } from './nfts'
import { SceneInitData, SceneManager } from './modules/sceneMgmt/sceneManager';
import { BaseEntityWrapper, SubScene } from './modules/sceneMgmt/subScene'

export const SCENE_MGR = new SceneManager();
/*
const sceneInit:SceneInitData = {
  entities:[],
  name:"name",
  onInit:(wrap:BaseEntityWrapper)=>{},
  onHide:(wrap:BaseEntityWrapper)=>{},
  onShow:(wrap:BaseEntityWrapper)=>{},
}
SCENE_MGR.addScene(sceneInit)
*/
export function createSubScene(
  id: number,
  triggerPosition: Vector3,
  triggerSize: Vector3,
  entities: Entity[]
) {

  
  const subScene = new SubScene( id,"scene-"+id,[],triggerPosition,triggerSize )
  subScene.addOnShowListener((baseEntWrapper)=>{
    log(subScene.id + " show called")
  })
  subScene.addOnHideListener( (baseEntWrapper)=>{
    log(subScene.id + " hide called")
  })
  subScene.addOnInitListener( (baseEntWrapper)=>{
    log(subScene.id + " onInit called")
  })

  SCENE_MGR.addScene(subScene)

  return subScene;
}

// create subScenes
const gallery1 = createSubScene(
  1,
  new Vector3(4, 1, 26),
  new Vector3(10, 8, 16),
  []
)



const gallery2 = createSubScene(
  2,
  new Vector3(16, 1, 26),
  new Vector3(10, 8, 16),
  []
)

const gallery3 = createSubScene(
  3,
  new Vector3(26, 1, 26),
  new Vector3(10, 8, 16),
  []
)

const gallery4 = createSubScene(
  4,
  new Vector3(4, 1, 8),
  new Vector3(10, 8, 16),
  []
)

const gallery5 = createSubScene(
  5,
  new Vector3(16, 1, 8),
  new Vector3(10, 8, 16),
  []
)

const gallery6 = createSubScene(
  6,
  new Vector3(26, 1, 8),
  new Vector3(10, 8, 16),
  []
)

for (const nft of nftCollection) {
  
  const scene = SCENE_MGR.getSceneById(nft.room)
 
  if(scene){
    scene.addOnInitListener((entityWrapper:BaseEntityWrapper)=>{
      log("scene.adding paintings",scene.id,nft)
      const painting = createPainting(
        nft.id,
        nft.position,
        nft.contract, 
        nft.tokenId
      )
      //scene.
      const sceneEnt = scene.addEntity(painting)
      sceneEnt.addOnShowListener((entityWrap)=>{
        log("painting.showed ",nft.id)
      })
    })
  }else{
    log("count not find scene",nft.room)
  }
}
  
SCENE_MGR.initScenes()
SCENE_MGR.hideScenes() 
 