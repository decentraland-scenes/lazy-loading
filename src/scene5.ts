import { ROOT_SCENE_ADD_TO_ENGINE_ON_SCENE_LOAD, ROOT_SCENE_VISIBILITY_STRATEGY, SCENE_MGR } from "./globals"
import { BaseEntityWrapper, SubScene } from "./modules/sceneMgmt/subScene"
import { RotatorSystem, RotatorSystemComponent } from "./rotatorSystem"

/// --- Spawner function ---

function spawnCube(x: number, y: number, z: number) {
  // create the entity
  const cube = new Entity()

  // add a transform to the entity
  cube.addComponent(new Transform({ position: new Vector3(x, y, z) }))
  cube.addComponent(new RotatorSystemComponent())
  // add a shape to the entity
  cube.addComponent(new BoxShape())

  // add the entity to the engine
  //engine.addEntity(cube)

  return cube
}

/// --- Spawn a cube ---

export function createScene(){
    
  const _scene4 = new Entity('_scene4')
  if(ROOT_SCENE_ADD_TO_ENGINE_ON_SCENE_LOAD) engine.addEntity(_scene4)
  const transformScene3 = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  _scene4.addComponentOrReplace(transformScene3)


  const pivotScene = new Entity()
  pivotScene.addComponent(new Transform({
    position: new Vector3(0, 0, 0),
    rotation: Quaternion.Euler(0,0,0),
  }))
  pivotScene.setParent(_scene4)


  
  const cube = spawnCube(16, 1, 18)
  cube.setParent(pivotScene)
  cube.addComponent(
    new OnPointerDown(() => {
      cube.getComponent(Transform).scale.z *= 1.1
      cube.getComponent(Transform).scale.x *= 0.9

      spawnCube(Math.random() * 8 + 1, Math.random() * 8, Math.random() * 8 + 1)
    },{
      hoverText:"Example of system activated/deactivated when scene is shown/hidden"
    })
  )



  return _scene4
}
 
export function createScene5(){
  const _scene4 = createScene()
 

  const rotSystem:ISystem = new RotatorSystem()
 
  const galleryGroup4Base_ID = SCENE_MGR.generateSceneId()
  const galleryGroupBase4 = new SubScene(galleryGroup4Base_ID,"sceneGroupBase4",[],undefined,undefined)

  galleryGroupBase4.addOnShowListener(()=>{
    if( !rotSystem.active ) engine.addSystem(rotSystem)
  })
  galleryGroupBase4.addOnHideListener(()=>{
    if( rotSystem.active ) engine.removeSystem(rotSystem)
  })

  const sceneEntity = galleryGroupBase4.addEntity(_scene4) 
  sceneEntity.visibilityStrategy = ROOT_SCENE_VISIBILITY_STRATEGY

  sceneEntity.addOnInitListener( (entityWrap:BaseEntityWrapper)=>{
    if(!sceneEntity.rootEntity.alive) engine.addEntity( sceneEntity.rootEntity )
  } )


  SCENE_MGR.addScene(galleryGroupBase4)





  return galleryGroupBase4
}