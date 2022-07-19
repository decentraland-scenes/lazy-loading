import { SCENE_MGR } from "./globals"
import { BaseEntityWrapper, SubScene } from "./modules/sceneMgmt/subScene"

export function createSubScene(
  id: number,
  staticSceneParent:Entity,
  transformArgs:TranformConstructorArgs,
  shape:GLTFShape,
  triggerPosition: Vector3,
  triggerSize: Vector3,
  entities: Entity[]
) {

  const shopText = new Entity("shop.text."+id)

  const textPos = transformArgs.position && transformArgs.position.z < 16 ? 3.5 : -3.5
  const textRot = transformArgs.rotation?.eulerAngles.y == 180 ? Quaternion.Euler(0,0,0) : Quaternion.Euler(0,180,0)

  shopText.addComponent(new Transform(({position:transformArgs.position?.clone().add(new Vector3(0,4,textPos)),rotation:textRot})))
  shopText.addComponent(new TextShape("Gallery " +id))
  //engine.addEntity(shopText)
  shopText.setParent(staticSceneParent)
  //subScene.addEntity( shopText )
   
  const subScene = new SubScene( id,"scene-"+id,[],triggerPosition,triggerSize )
  //subScene.visibilityStrategy = VisibilityStrategyEnum.ENGINE_ADD_REMOVE
  subScene.addOnShowListener((baseEntWrapper:BaseEntityWrapper)=>{
    log(subScene.id + " show called")
  }) 
  subScene.addOnHideListener( (baseEntWrapper:BaseEntityWrapper)=>{
    log(subScene.id + " hide called")
  })
  subScene.addOnInitListener( (baseEntWrapper:BaseEntityWrapper)=>{
    log(subScene.id + " onInit called")
  
  })

  SCENE_MGR.addScene(subScene)

  return subScene;
}
