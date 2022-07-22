/**
 * 
 * static non changing stuff accross all subscenes goes here
 * 
 */


export function createBaseScene() {

  const _scene = new Entity('_scene')
  engine.addEntity(_scene)

  const transform = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  _scene.addComponentOrReplace(transform)

  const entity = new Entity('entity')
  engine.addEntity(entity)
  entity.setParent(_scene)
  const gltfShape = new GLTFShape('models/FloorBaseDirt_01.glb')
  entity.addComponentOrReplace(gltfShape)
  const transform2 = new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  entity.addComponentOrReplace(transform2)

  const entity2 = new Entity('entity2')
  engine.addEntity(entity2)
  entity2.setParent(_scene)
  entity2.addComponentOrReplace(gltfShape)
  const transform3 = new Transform({
    position: new Vector3(24, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  entity2.addComponentOrReplace(transform3)

  const entity3 = new Entity('entity3')
  engine.addEntity(entity3)
  entity3.setParent(_scene)
  entity3.addComponentOrReplace(gltfShape)
  const transform4 = new Transform({
    position: new Vector3(8, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  entity3.addComponentOrReplace(transform4)

  const entity4 = new Entity('entity4')
  engine.addEntity(entity4)
  entity4.setParent(_scene)
  entity4.addComponentOrReplace(gltfShape)
  const transform5 = new Transform({
    position: new Vector3(24, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  entity4.addComponentOrReplace(transform5)

  const rockTile = new Entity('rockTile')
  engine.addEntity(rockTile)
  rockTile.setParent(_scene)
  const transform12 = new Transform({
    position: new Vector3(31, 0, 17.5),
    rotation: new Quaternion(
      -1.5394153601527394e-15,
      -0.7071068286895752,
      8.429369557916289e-8,
      0.7071068286895752
    )
  })
  rockTile.addComponentOrReplace(transform12)
  const gltfShape3 = new GLTFShape('models/FloorBlock_04.glb')
  rockTile.addComponentOrReplace(gltfShape3)

  const rockTile2 = new Entity('rockTile2')
  engine.addEntity(rockTile2)
  rockTile2.setParent(_scene)
  rockTile2.addComponentOrReplace(gltfShape3)
  const transform13 = new Transform({
    position: new Vector3(29, 0, 17.5),
    rotation: new Quaternion(
      -1.5394153601527394e-15,
      -0.7071068286895752,
      8.429369557916289e-8,
      0.7071068286895752
    )
  })
  rockTile2.addComponentOrReplace(transform13)

  const rockTile3 = new Entity('rockTile3')
  engine.addEntity(rockTile3)
  rockTile3.setParent(_scene)
  rockTile3.addComponentOrReplace(gltfShape3)
  const transform14 = new Transform({
    position: new Vector3(27, 0, 17.5),
    rotation: new Quaternion(
      -1.5394153601527394e-15,
      -0.7071068286895752,
      8.429369557916289e-8,
      0.7071068286895752
    )
  })
  rockTile3.addComponentOrReplace(transform14)

  const rockTile4 = new Entity('rockTile4')
  engine.addEntity(rockTile4)
  rockTile4.setParent(_scene)
  rockTile4.addComponentOrReplace(gltfShape3)
  const transform15 = new Transform({
    position: new Vector3(25, 0, 17.5),
    rotation: new Quaternion(
      -1.5394153601527394e-15,
      -0.7071068286895752,
      8.429369557916289e-8,
      0.7071068286895752
    )
  })
  rockTile4.addComponentOrReplace(transform15)

  const rockTile5 = new Entity('rockTile5')
  engine.addEntity(rockTile5)
  rockTile5.setParent(_scene)
  rockTile5.addComponentOrReplace(gltfShape3)
  const transform16 = new Transform({
    position: new Vector3(23, 0, 17.5),
    rotation: new Quaternion(
      -1.5394153601527394e-15,
      -0.7071068286895752,
      8.429369557916289e-8,
      0.7071068286895752
    )
  })
  rockTile5.addComponentOrReplace(transform16)

  const rockTile6 = new Entity('rockTile6')
  engine.addEntity(rockTile6)
  rockTile6.setParent(_scene)
  rockTile6.addComponentOrReplace(gltfShape3)
  const transform17 = new Transform({
    position: new Vector3(21, 0, 17.5),
    rotation: new Quaternion(
      -1.5394153601527394e-15,
      -0.7071068286895752,
      8.429369557916289e-8,
      0.7071068286895752
    )
  })
  rockTile6.addComponentOrReplace(transform17)

  const rockTile7 = new Entity('rockTile7')
  engine.addEntity(rockTile7)
  rockTile7.setParent(_scene)
  rockTile7.addComponentOrReplace(gltfShape3)
  const transform18 = new Transform({
    position: new Vector3(19, 0, 17.5),
    rotation: new Quaternion(
      -1.5394153601527394e-15,
      -0.7071068286895752,
      8.429369557916289e-8,
      0.7071068286895752
    )
  })
  rockTile7.addComponentOrReplace(transform18)

  const rockTile8 = new Entity('rockTile8')
  engine.addEntity(rockTile8)
  rockTile8.setParent(_scene)
  rockTile8.addComponentOrReplace(gltfShape3)
  const transform19 = new Transform({
    position: new Vector3(17, 0, 17.5),
    rotation: new Quaternion(
      -1.5394153601527394e-15,
      -0.7071068286895752,
      8.429369557916289e-8,
      0.7071068286895752
    )
  })
  rockTile8.addComponentOrReplace(transform19)

  const rockTile9 = new Entity('rockTile9')
  engine.addEntity(rockTile9)
  rockTile9.setParent(_scene)
  rockTile9.addComponentOrReplace(gltfShape3)
  const transform20 = new Transform({
    position: new Vector3(15, 0, 17.5),
    rotation: new Quaternion(
      -1.5394153601527394e-15,
      -0.7071068286895752,
      8.429369557916289e-8,
      0.7071068286895752
    )
  })
  rockTile9.addComponentOrReplace(transform20)

  const rockTile10 = new Entity('rockTile10')
  engine.addEntity(rockTile10)
  rockTile10.setParent(_scene)
  rockTile10.addComponentOrReplace(gltfShape3)
  const transform21 = new Transform({
    position: new Vector3(13, 0, 17.5),
    rotation: new Quaternion(
      -1.5394153601527394e-15,
      -0.7071068286895752,
      8.429369557916289e-8,
      0.7071068286895752
    )
  })
  rockTile10.addComponentOrReplace(transform21)

  const rockTile11 = new Entity('rockTile11')
  engine.addEntity(rockTile11)
  rockTile11.setParent(_scene)
  rockTile11.addComponentOrReplace(gltfShape3)
  const transform22 = new Transform({
    position: new Vector3(11, 0, 17.5),
    rotation: new Quaternion(
      -1.5394153601527394e-15,
      -0.7071068286895752,
      8.429369557916289e-8,
      0.7071068286895752
    )
  })
  rockTile11.addComponentOrReplace(transform22)

  const rockTile12 = new Entity('rockTile12')
  engine.addEntity(rockTile12)
  rockTile12.setParent(_scene)
  rockTile12.addComponentOrReplace(gltfShape3)
  const transform23 = new Transform({
    position: new Vector3(9, 0, 17.5),
    rotation: new Quaternion(
      -1.5394153601527394e-15,
      -0.7071068286895752,
      8.429369557916289e-8,
      0.7071068286895752
    )
  })
  rockTile12.addComponentOrReplace(transform23)

  const rockTile13 = new Entity('rockTile13')
  engine.addEntity(rockTile13)
  rockTile13.setParent(_scene)
  rockTile13.addComponentOrReplace(gltfShape3)
  const transform24 = new Transform({
    position: new Vector3(7, 0, 17.5),
    rotation: new Quaternion(
      -1.5394153601527394e-15,
      -0.7071068286895752,
      8.429369557916289e-8,
      0.7071068286895752
    )
  })
  rockTile13.addComponentOrReplace(transform24)

  const rockTile14 = new Entity('rockTile14')
  engine.addEntity(rockTile14)
  rockTile14.setParent(_scene)
  rockTile14.addComponentOrReplace(gltfShape3)
  const transform25 = new Transform({
    position: new Vector3(5, 0, 17.5),
    rotation: new Quaternion(
      -1.5394153601527394e-15,
      -0.7071068286895752,
      8.429369557916289e-8,
      0.7071068286895752
    )
  })
  rockTile14.addComponentOrReplace(transform25)

  const rockTile15 = new Entity('rockTile15')
  engine.addEntity(rockTile15)
  rockTile15.setParent(_scene)
  rockTile15.addComponentOrReplace(gltfShape3)
  const transform26 = new Transform({
    position: new Vector3(3, 0, 17.5),
    rotation: new Quaternion(
      -1.5394153601527394e-15,
      -0.7071068286895752,
      8.429369557916289e-8,
      0.7071068286895752
    )
  })
  rockTile15.addComponentOrReplace(transform26)

  const rockTile16 = new Entity('rockTile16')
  engine.addEntity(rockTile16)
  rockTile16.setParent(_scene)
  rockTile16.addComponentOrReplace(gltfShape3)
  const transform27 = new Transform({
    position: new Vector3(1, 0, 17.5),
    rotation: new Quaternion(
      -1.5394153601527394e-15,
      -0.7071068286895752,
      8.429369557916289e-8,
      0.7071068286895752
    )
  })
  rockTile16.addComponentOrReplace(transform27)

  return _scene
}