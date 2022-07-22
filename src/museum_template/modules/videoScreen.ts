import * as utils from '@dcl/ecs-scene-utils'
import config from '../config'


export function addVideoScreen(pivotScene:Entity):Entity {


    const videoClip = new VideoClip(config.videoScreen.src)
    const videoTexture = new VideoTexture(videoClip)

    const screenMaterial = new Material()
    screenMaterial.albedoTexture = videoTexture
    screenMaterial.specularIntensity = 0
    screenMaterial.roughness = 1
    screenMaterial.metallic = 0

    const screen = new Entity()
    screen.addComponent(new PlaneShape())
    screen.addComponent(
        new Transform({
            position: new Vector3(0, 10.8502, 6.89162),
            rotation: Quaternion.Euler(0, 180, 0),
            scale: Vector3.Zero()
        })
    )
    screen.setParent(pivotScene)
    screen.addComponent(screenMaterial)

    videoTexture.playing = false
    videoTexture.loop = true

    const triggerEntity = new Entity()
    triggerEntity.addComponent(new Transform({
        position: new Vector3(0, 9.5, 0)
    }))
    let triggerBox = new utils.TriggerBoxShape(new Vector3(14, 4, 14), Vector3.Zero())


    let xScale = 1

    if (config.videoScreen.width > config.videoScreen.height) {
        xScale = config.videoScreen.width / config.videoScreen.height
    }

    triggerEntity.addComponent(
        new utils.TriggerComponent(
            triggerBox, //shape
            {
                onCameraEnter: () => {
                    videoTexture.playing = true
                    screen.getComponent(Transform).scale.set(4 * xScale, 4, 1)
                },

                onCameraExit: () => {
                    log("trigger.exit. stop video")
                    videoTexture.playing = false
                    screen.getComponent(Transform).scale.setAll(0)
                },
                enableDebug: false
            }
        )
    )
    triggerEntity.setParent(pivotScene)

    return screen
}
