import * as utils from '@dcl/ecs-scene-utils'
import { nftCollection, Painting } from './nfts'

let allShapesType =
  BoxShape ||
  CylinderShape ||
  ConeShape ||
  SphereShape ||
  PlaneShape ||
  AvatarShape ||
  CircleShape ||
  TextShape ||
  GLTFShape ||
  NFTShape

export class SubScene extends Entity {
  public entities: Entity[]
  public id: number

  constructor(
    id: number,
    triggerPosition: Vector3,
    triggerSize: Vector3,
    entities: Entity[]
  ) {
    super()
    engine.addEntity(this)

    this.id = id
    this.entities = entities

    let triggerBox = new utils.TriggerBoxShape(triggerSize, triggerPosition)
    this.addComponent(
      new utils.TriggerComponent(triggerBox, {
        onCameraEnter: () => {
          this.show()
        },
        onCameraExit: () => {
          this.hide()
        },
        // uncomment the line below to see the areas covered by the trigger areas
        // enableDebug: true,
      })
    )
  }

  addEntity(newEntity: Entity) {
    this.entities.push(newEntity)

    newEntity.getComponent('engine.shape').visible = false
  }

  show() {
    this.entities.forEach((entity) => {
      entity.getComponent('engine.shape').visible = true
      log('making visible ', entity.uuid)
    })
  }

  hide() {
    this.entities.forEach((entity) => {
      entity.getComponent('engine.shape').visible = false
    })
  }
}

// create subScenes
const gallery1 = new SubScene(
  1,
  new Vector3(4, 1, 26),
  new Vector3(10, 8, 16),
  []
)

const gallery2 = new SubScene(
  2,
  new Vector3(16, 1, 26),
  new Vector3(10, 8, 16),
  []
)

const gallery3 = new SubScene(
  3,
  new Vector3(26, 1, 26),
  new Vector3(10, 8, 16),
  []
)

const gallery4 = new SubScene(
  4,
  new Vector3(4, 1, 8),
  new Vector3(10, 8, 16),
  []
)

const gallery5 = new SubScene(
  5,
  new Vector3(16, 1, 8),
  new Vector3(10, 8, 16),
  []
)

const gallery6 = new SubScene(
  6,
  new Vector3(26, 1, 8),
  new Vector3(10, 8, 16),
  []
)

for (let nft of nftCollection) {
  // create entity
  let painting = new Painting(nft.id, nft.position, nft.contract, nft.tokenId)

  // assign entity to subScene
  switch (nft.room) {
    case 1:
      gallery1.addEntity(painting)
      break
    case 2:
      gallery2.addEntity(painting)
      break
    case 3:
      gallery3.addEntity(painting)
      break
    case 4:
      gallery4.addEntity(painting)
      break
    case 5:
      gallery5.addEntity(painting)
      break
    case 6:
      gallery6.addEntity(painting)
      break
  }
}
