import * as utils from '@dcl/ecs-scene-utils'
import { nftCollection, createPainting } from './nfts'

export function createSubScene(
  id: number,
  triggerPosition: Vector3,
  triggerSize: Vector3,
  entities: Entity[]
) {
  const myEntity = new Entity()
  engine.addEntity(myEntity)

  const triggerBox = new utils.TriggerBoxShape(triggerSize, triggerPosition)
  myEntity.addComponent(
    new utils.TriggerComponent(triggerBox, {
      onCameraEnter: () => {
        show()
      },
      onCameraExit: () => {
        hide()
      }
      // uncomment the line below to see the areas covered by the trigger areas
      // enableDebug: true,
    })
  )

  function addEntity(newEntity: Entity) {
    entities.push(newEntity)

    newEntity.getComponent('engine.shape').visible = false
  }

  function show() {
    entities.forEach((entity) => {
      entity.getComponent('engine.shape').visible = true
      log('making visible ', entity.uuid)
    })
  }

  function hide() {
    entities.forEach((entity) => {
      entity.getComponent('engine.shape').visible = false
    })
  }

  return {
    entity,
    addEntity
  }
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
  // create entity
  const painting = createPainting(
    nft.id,
    nft.position,
    nft.contract,
    nft.tokenId
  )

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
