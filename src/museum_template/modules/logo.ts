import config from "../config"


export function addLogo(pivotScene:Entity) {
    //TOP LOGO
    const topLogoData = config.logo.top

    const myEntity = new Entity()
    const myText = new TextShape(topLogoData.name)

    myText.font = new Font(Fonts.LiberationSans)
    myText.color = topLogoData.color
    myText.fontSize = topLogoData.fontSize

    myText.shadowColor = Color3.Gray()
    myText.shadowOffsetY = 0.5
    myText.shadowOffsetX = -0.5

    myEntity.addComponent(myText)


    myEntity.addComponent(new Transform({
        position: topLogoData.position,
        rotation: Quaternion.Euler(0, 180, 0)
    }))
    myEntity.setParent(pivotScene)

    //BOTTOM LOGO
    const bottomLogoData = config.logo.bottom

    const logoFrame = new Entity()
    logoFrame.addComponent(new GLTFShape("models/museum/logo_frame.glb"))
    logoFrame.addComponent(new Transform({
        position: config.logo.bottom.position,
        rotation: Quaternion.Euler(0, 0, 0)
    }))

    let imageTexture = new Texture(bottomLogoData.imgSrc)
    let pictureMat = new Material()
    pictureMat.albedoTexture = imageTexture
    pictureMat.specularIntensity = 0
    pictureMat.metallic = 0
    pictureMat.roughness = 1
    pictureMat.emissiveTexture = imageTexture
    pictureMat.emissiveIntensity = 0.5
    pictureMat.emissiveColor = Color3.White()
    pictureMat.transparencyMode = 1

    const imgFront = new Entity()
    imgFront.addComponent(new PlaneShape())
    imgFront.addComponent(new Transform({
        position: new Vector3(0, 0, 0.08),
        rotation: Quaternion.Euler(0, 180, 180),
        scale: new Vector3(1.18, 1.18, 1)
    }))
    imgFront.addComponent(pictureMat)

    const imgBack = new Entity()
    imgBack.addComponent(new PlaneShape())
    imgBack.addComponent(new Transform({
        position: new Vector3(0, 0, -0.08),
        rotation: Quaternion.Euler(0, 0, 180),
        scale: new Vector3(1.18, 1.18, 1)
    }))
    imgBack.addComponent(pictureMat)

    imgFront.setParent(logoFrame)
    imgBack.setParent(logoFrame)

    logoFrame.setParent(pivotScene)
}