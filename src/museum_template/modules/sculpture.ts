import config from "../config"

export function addSculpture(pivotScene:Entity) {
    const sculpture = new Entity()
    sculpture.addComponent(new GLTFShape(config.sculpture.modelSrc))
    sculpture.addComponent(new Transform({
        position: config.sculpture.position
    }))
    sculpture.setParent(pivotScene)
}