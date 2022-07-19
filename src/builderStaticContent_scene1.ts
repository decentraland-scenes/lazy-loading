import { loadStaticScene2 } from "./builderStaticContent_scene2"
import { SCENE_MGR } from "./globals"
import { SubScene, SubSceneGroup } from "./modules/sceneMgmt/subScene"
import { createSubScene } from "./utils"

export function loadStaticScene1(){

  const _scene1 = new Entity('_scene1')
  engine.addEntity(_scene1)
  const transformScene1 = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  _scene1.addComponentOrReplace(transformScene1)








  
  const shopBlack = new Entity('shopBlack')
  engine.addEntity(shopBlack)
  shopBlack.setParent(_scene1)
  const transform6 = new Transform({
    position: new Vector3(26, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  shopBlack.addComponentOrReplace(transform6)
  const gltfShape2 = new GLTFShape('models/Shop_Black.glb')
  shopBlack.addComponentOrReplace(gltfShape2)

  const shopBlack2 = new Entity('shopBlack2')
  engine.addEntity(shopBlack2)
  shopBlack2.setParent(_scene1)
  shopBlack2.addComponentOrReplace(gltfShape2)
  const transform7 = new Transform({
    position: new Vector3(16, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  shopBlack2.addComponentOrReplace(transform7)

  const shopBlack3 = new Entity('shopBlack3')
  engine.addEntity(shopBlack3)
  shopBlack3.setParent(_scene1)
  shopBlack3.addComponentOrReplace(gltfShape2)
  const transform8 = new Transform({
    position: new Vector3(4, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  shopBlack3.addComponentOrReplace(transform8)

  const shopBlack4 = new Entity('shopBlack4')
  engine.addEntity(shopBlack4)
  shopBlack4.setParent(_scene1)
  shopBlack4.addComponentOrReplace(gltfShape2)
  const transform9 = new Transform({
    position: new Vector3(26, 0, 26),
    rotation: new Quaternion(
      7.362779683899381e-15,
      1,
      -1.1920927533992653e-7,
      2.980232238769531e-8
    ),
    scale: new Vector3(1, 1, 1)
  })
  shopBlack4.addComponentOrReplace(transform9)

  const shopBlack5 = new Entity('shopBlack5')
  engine.addEntity(shopBlack5)
  shopBlack5.setParent(_scene1)
  shopBlack5.addComponentOrReplace(gltfShape2)
  const transform10 = new Transform({
    position: new Vector3(16, 0, 26),
    rotation: new Quaternion(
      7.362779683899381e-15,
      1,
      -1.1920927533992653e-7,
      2.980232238769531e-8
    ),
    scale: new Vector3(1, 1, 1)
  })
  shopBlack5.addComponentOrReplace(transform10)

  const shopBlack6 = new Entity('shopBlack6')
  engine.addEntity(shopBlack6)
  shopBlack6.setParent(_scene1)
  shopBlack6.addComponentOrReplace(gltfShape2)
  const transform11 = new Transform({
    position: new Vector3(4, 0, 26),
    rotation: new Quaternion(
      7.362779683899381e-15,
      1,
      -1.1920927533992653e-7,
      2.980232238769531e-8
    ),
    scale: new Vector3(1, 1, 1)
  })
  shopBlack6.addComponentOrReplace(transform11)




  return _scene1


}
const shopBlack = new GLTFShape('models/Shop_Black.glb')

export function createScene1(){

  const _scene1 = loadStaticScene1()
  // create subScenes
  const gallery1 = createSubScene(
    1,
    _scene1,
    {position:new Vector3(4, 0, 26), rotation:Quaternion.Euler(0,180,0)},
    shopBlack,
    new Vector3(4, 1, 26),
    new Vector3(10, 8, 16),
    []
  )



  const gallery2 = createSubScene(
    2,
    _scene1,
    {position:new Vector3(16, 0, 26), rotation:Quaternion.Euler(0,180,0)},
    shopBlack,
    new Vector3(16, 1, 26), 
    new Vector3(10, 8, 16),
    []
  )

  const gallery3 = createSubScene(
    3,
    _scene1,
    //{position:new Vector3(26, 0, 8), rotation:Quaternion.Euler(0,0,0)},
    {position:new Vector3(26, 0, 26), rotation:Quaternion.Euler(0,180,0)},
    shopBlack,
    new Vector3(26, 1, 26),
    new Vector3(10, 8, 16),
    []
  )

  const gallery4 = createSubScene(
    4,
    _scene1,
    {position:new Vector3(4, 0, 8), rotation:Quaternion.Euler(0,0,0)},//good
    shopBlack,
    new Vector3(4, 1, 8),
    new Vector3(10, 8, 16),
    []
  )

  const gallery5 = createSubScene(
    5,
    _scene1,
    //{position:new Vector3(16, 0, 26), rotation:Quaternion.Euler(0,0,0)},
    {position:new Vector3(16, 0, 8), rotation:Quaternion.Euler(0,0,0)},
    shopBlack,
    new Vector3(16, 1, 8),
    new Vector3(10, 8, 16),
    []
  )

  const gallery6 = createSubScene( 
    6,
    _scene1,
    //{position:new Vector3(4, 0, 26), rotation:Quaternion.Euler(0,0,0)},
    {position:new Vector3(26, 0, 8), rotation:Quaternion.Euler(0,0,0)},
    shopBlack,
    new Vector3(26, 1, 8),
    new Vector3(10, 8, 16),
    []
  ) 




  const galleryGroup1Base_ID = SCENE_MGR.generateSceneId()
  const galleryGroupBase1 = new SubScene(galleryGroup1Base_ID,"sceneGroupBase1",[],undefined,undefined)
  galleryGroupBase1.rootEntity = _scene1
  galleryGroupBase1.addEntity(_scene1) 
  //galleryGroupBase1.visibilityStrategy = VisibilityStrategyEnum.ENGINE_ADD_REMOVE
  SCENE_MGR.addScene(galleryGroupBase1)

  
  const gallery1Buildings = [gallery1,gallery2,gallery3,gallery4,gallery4,gallery5,gallery6]

  const galleryGroup1_ID = SCENE_MGR.generateSceneId()
  const galleryGroup1 = new SubSceneGroup(galleryGroup1_ID,"sceneGroup1",[],undefined,undefined)
  SCENE_MGR.addScene(galleryGroup1)

  galleryGroup1.scenes.push(galleryGroupBase1)


  galleryGroup1.addOnShowListener(()=>{ 
    log("galleryGroup1.addOnShowListener")
    //for triggers to work have to mass hide to start
    for(const p in gallery1Buildings){
      gallery1Buildings[p].enable()
      gallery1Buildings[p].hide(true)
    }
  })

  return galleryGroup1

}