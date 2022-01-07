type NFTdata = {
  room: number
  id: number
  position: TransformConstructorArgs
  contract: string
  tokenId: string
}

export const nftCollection: NFTdata[] = [
  {
    room: 1,
    id: 1,
    position: {
      position: new Vector3(4, 2, 30),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5, 2.5, 2.5),
    },
    contract: '0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2',
    tokenId: '224',
  },
  {
    room: 1,
    id: 2,
    position: {
      position: new Vector3(2, 2, 26),
      rotation: Quaternion.Euler(0, -90, 0),
      scale: new Vector3(2.5, 2.5, 2.5),
    },
    contract: '0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2',
    tokenId: '223',
  },
  {
    room: 1,
    id: 3,
    position: {
      position: new Vector3(6.3, 2, 26),
      rotation: Quaternion.Euler(0, 90, 0),
      scale: new Vector3(2.5, 2.5, 2.5),
    },
    contract: '0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2',
    tokenId: '218',
  },
  {
    room: 2,
    id: 4,
    position: {
      position: new Vector3(4 + 12, 2, 30),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5, 2.5, 2.5),
    },
    contract: '0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2',
    tokenId: '100',
  },
  {
    room: 2,
    id: 5,
    position: {
      position: new Vector3(2 + 12, 2, 26),
      rotation: Quaternion.Euler(0, -90, 0),
      scale: new Vector3(2.5, 2.5, 2.5),
    },
    contract: '0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2',
    tokenId: '101',
  },
  {
    room: 2,
    id: 6,
    position: {
      position: new Vector3(6.3 + 12, 2, 26),
      rotation: Quaternion.Euler(0, 90, 0),
      scale: new Vector3(2.5, 2.5, 2.5),
    },
    contract: '0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2',
    tokenId: '102',
  },
  {
    room: 3,
    id: 7,
    position: {
      position: new Vector3(4 + 22, 2, 30),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5, 2.5, 2.5),
    },
    contract: '0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2',
    tokenId: '110',
  },
  {
    room: 3,
    id: 8,
    position: {
      position: new Vector3(2 + 22, 2, 26),
      rotation: Quaternion.Euler(0, -90, 0),
      scale: new Vector3(2.5, 2.5, 2.5),
    },
    contract: '0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2',
    tokenId: '111',
  },
  {
    room: 3,
    id: 9,
    position: {
      position: new Vector3(6.3 + 22, 2, 26),
      rotation: Quaternion.Euler(0, 90, 0),
      scale: new Vector3(2.5, 2.5, 2.5),
    },
    contract: '0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2',
    tokenId: '112',
  },
  {
    room: 4,
    id: 10,
    position: {
      position: new Vector3(4, 2, 22 - 18),
      rotation: Quaternion.Euler(0, 180, 0),
      scale: new Vector3(2.5, 2.5, 2.5),
    },
    contract: '0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2',
    tokenId: '113',
  },
  {
    room: 4,
    id: 11,
    position: {
      position: new Vector3(1.7, 2, 26 - 18),
      rotation: Quaternion.Euler(0, -90, 0),
      scale: new Vector3(2.5, 2.5, 2.5),
    },
    contract: '0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2',
    tokenId: '114',
  },
  {
    room: 4,
    id: 12,
    position: {
      position: new Vector3(6.3, 2, 26 - 18),
      rotation: Quaternion.Euler(0, 90, 0),
      scale: new Vector3(2.5, 2.5, 2.5),
    },
    contract: '0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2',
    tokenId: '115',
  },
  {
    room: 5,
    id: 13,
    position: {
      position: new Vector3(4 + 12, 2, 22 - 18),
      rotation: Quaternion.Euler(0, 180, 0),
      scale: new Vector3(2.5, 2.5, 2.5),
    },
    contract: '0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2',
    tokenId: '98',
  },
  {
    room: 5,
    id: 14,
    position: {
      position: new Vector3(1.7 + 12, 2, 26 - 18),
      rotation: Quaternion.Euler(0, -90, 0),
      scale: new Vector3(2.5, 2.5, 2.5),
    },
    contract: '0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2',
    tokenId: '87',
  },
  {
    room: 5,
    id: 15,
    position: {
      position: new Vector3(6.3 + 12, 2, 26 - 18),
      rotation: Quaternion.Euler(0, 90, 0),
      scale: new Vector3(2.5, 2.5, 2.5),
    },
    contract: '0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2',
    tokenId: '66',
  },
  {
    room: 6,
    id: 16,
    position: {
      position: new Vector3(4 + 22, 2, 22 - 18),
      rotation: Quaternion.Euler(0, 180, 0),
      scale: new Vector3(2.5, 2.5, 2.5),
    },
    contract: '0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2',
    tokenId: '3',
  },
  {
    room: 6,
    id: 17,
    position: {
      position: new Vector3(1.7 + 22, 2, 26 - 18),
      rotation: Quaternion.Euler(0, -90, 0),
      scale: new Vector3(2.5, 2.5, 2.5),
    },
    contract: '0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2',
    tokenId: '4',
  },
  {
    room: 6,
    id: 18,
    position: {
      position: new Vector3(6.3 + 22, 2, 26 - 18),
      rotation: Quaternion.Euler(0, 90, 0),
      scale: new Vector3(2.5, 2.5, 2.5),
    },
    contract: '0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2',
    tokenId: '8',
  },
]

export class Painting extends Entity {
  public id: number
  public address: string

  constructor(
    id: number,
    position: TransformConstructorArgs,
    contract: string,
    tokenId: string
  ) {
    super()
    this.addComponent(new Transform(position))

    // notice the entity is not added to the engine on purpose
    // engine.addEntity(this)

    this.id = id

    this.address = 'ethereum://' + contract + '/' + tokenId

    const nftShape = new NFTShape(this.address, {
      style: PictureFrameStyle.Gold_Edges,
    })
    this.addComponent(nftShape)
  }
}
