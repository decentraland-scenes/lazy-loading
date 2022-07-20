import config from "../config"

export function addNFTImage(pivotScene:Entity){
    for (let img of config.nftImage) {

        let imageTexture = new Texture(img.imgSrc)
        let pictureMat = new Material()
        pictureMat.albedoTexture = imageTexture
        pictureMat.specularIntensity = 0
        pictureMat.metallic = 0
        pictureMat.roughness = 1
        pictureMat.emissiveTexture = imageTexture
        pictureMat.emissiveIntensity = 0.5
        pictureMat.emissiveColor = Color3.White()
        pictureMat.transparencyMode = 1

        const nftPlane = new Entity(img.name)
        nftPlane.addComponent(new PlaneShape())

        let imageYRotation = 0
        if (img.position.x >= 0) imageYRotation = 90
        else imageYRotation = -90

        let xScale = 1
        let yScale = 1
        if (img.height >= img.width) {
            xScale = img.width / img.height
        }
        else {
            yScale = img.height / img.width
        }

        nftPlane.addComponent(new Transform({
            position: img.position,
            rotation: Quaternion.Euler(0, imageYRotation, 180),
            scale: new Vector3(2.5 * xScale, 2.5 * yScale, 2.5)
        }))

        if (img.link !== null && img.link !== "") {
            log(img.link)
            nftPlane.addComponent(new OnPointerDown(() => {
                if (img.link !== null) openExternalURL(img.link)
            },
                {
                    distance: 10
                }
            ))
        }
        nftPlane.addComponent(pictureMat)

        let frame = new Entity()
        frame.addComponent(new GLTFShape("models/museum/frame.glb"))
        frame.addComponent(new Transform({
            position: img.position,
            rotation: Quaternion.Euler(0, imageYRotation, 180),
            scale: new Vector3(2.75, 2.75, 2.75)
        }))


        nftPlane.setParent(pivotScene)
        frame.setParent(pivotScene)
    }
}