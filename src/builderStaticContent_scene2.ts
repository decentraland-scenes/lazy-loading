import { SCENE_MGR } from "./globals"
import { SubScene, SubSceneGroup } from "./modules/sceneMgmt/subScene"
import { createSubScene } from "./utils"


export function loadStaticScene2(){

  const _scene2 = new Entity('_scene2')
  engine.addEntity(_scene2)
  const transformScene2 = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  _scene2.addComponentOrReplace(transformScene2)




  
  
  const transform6 = new Transform({
    position: new Vector3(26, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  const transform7 = new Transform({
    position: new Vector3(16, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })

  const transform8 = new Transform({
    position: new Vector3(4, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
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


  
  const shopBlackEmissive = new Entity('shopBlackEmissive')
  engine.addEntity(shopBlackEmissive)
  shopBlackEmissive.setParent(_scene2)
  const transformEmissive6 = new Transform({
    position: new Vector3(26, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  shopBlackEmissive.addComponentOrReplace(transform6)
  const gltfShapeEmissive = new GLTFShape('models/Shop_Emissive.glb')
  shopBlackEmissive.addComponentOrReplace(gltfShapeEmissive)

  const shopBlackEmissive2 = new Entity('shopBlackEmissive2')
  engine.addEntity(shopBlackEmissive2)
  shopBlackEmissive2.setParent(_scene2)
  shopBlackEmissive2.addComponentOrReplace(gltfShapeEmissive)
  const transformEmissive7 = new Transform({
    position: new Vector3(16, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  shopBlackEmissive2.addComponentOrReplace(transform7)

  const shopBlackEmissive3 = new Entity('shopBlackEmissive3')
  engine.addEntity(shopBlackEmissive3)
  shopBlackEmissive3.setParent(_scene2)
  shopBlackEmissive3.addComponentOrReplace(gltfShapeEmissive)
  const transformEmissive8 = new Transform({
    position: new Vector3(4, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  shopBlackEmissive3.addComponentOrReplace(transform8)

  const shopBlackEmissive4 = new Entity('shopBlackEmissive4')
  engine.addEntity(shopBlackEmissive4)
  shopBlackEmissive4.setParent(_scene2)
  shopBlackEmissive4.addComponentOrReplace(gltfShapeEmissive)
  const transformEmissive9 = new Transform({
    position: new Vector3(26, 0, 26),
    rotation: new Quaternion(
      7.362779683899381e-15,
      1,
      -1.1920927533992653e-7,
      2.980232238769531e-8
    ),
    scale: new Vector3(1, 1, 1)
  })
  shopBlackEmissive4.addComponentOrReplace(transform9)

  const shopBlackEmissive5 = new Entity('shopBlackEmissive5')
  engine.addEntity(shopBlackEmissive5)
  shopBlackEmissive5.setParent(_scene2)
  shopBlackEmissive5.addComponentOrReplace(gltfShapeEmissive)
  const transformEmissive10 = new Transform({
    position: new Vector3(16, 0, 26),
    rotation: new Quaternion(
      7.362779683899381e-15,
      1,
      -1.1920927533992653e-7,
      2.980232238769531e-8
    ),
    scale: new Vector3(1, 1, 1)
  })
  shopBlackEmissive5.addComponentOrReplace(transform10)

  const shopBlackEmissive6 = new Entity('shopBlackEmissive6')
  engine.addEntity(shopBlackEmissive6)
  shopBlackEmissive6.setParent(_scene2)
  shopBlackEmissive6.addComponentOrReplace(gltfShapeEmissive)
  const transformEmissive11 = new Transform({
    position: new Vector3(4, 0, 26),
    rotation: new Quaternion(
      7.362779683899381e-15,
      1,
      -1.1920927533992653e-7,
      2.980232238769531e-8
    ),
    scale: new Vector3(1, 1, 1)
  })
  shopBlackEmissive6.addComponentOrReplace(transform11)

  return _scene2
}

export function createScene2(){

  const _scene2 = loadStaticScene2()

  const gallery7 = createSubScene( 
    7,
    _scene2,
    {position:new Vector3(26, 0, 8), rotation:Quaternion.Euler(0,0,0)},
    new GLTFShape('models/Shop_Emissive.glb'),
    new Vector3(26, 1, 8),
    new Vector3(10, 8, 16),
    []
  ) 



  const galleryGroup2Base_ID = SCENE_MGR.generateSceneId()
  const galleryGroupBase2 = new SubScene(galleryGroup2Base_ID,"sceneGroupBase2",[],undefined,undefined)
  galleryGroupBase2.addEntity(_scene2)
  //galleryGroupBase2.visibilityStrategy = VisibilityStrategyEnum.ENGINE_ADD_REMOVE
  SCENE_MGR.addScene(galleryGroupBase2)


  const galleryGroup2_ID = SCENE_MGR.generateSceneId()
  const galleryGroup2 = new SubSceneGroup(galleryGroup2_ID,"sceneGroup2",[],undefined,undefined)
  SCENE_MGR.addScene(galleryGroup2)

  galleryGroup2.scenes.push(galleryGroupBase2)
  //galleryGroup2.scenes.push(gallery7)


  galleryGroup2.addOnShowListener(()=>{
    gallery7.enable()
    //for triggers to work have to mass hide to start
    gallery7.hide(true)
  }) 


  return galleryGroup2

}