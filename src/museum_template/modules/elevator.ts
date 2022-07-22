import * as utils from '@dcl/ecs-scene-utils'


class elevatorSystem {

    startMove = false
    platform = new Entity()
    pivotScene: Entity

    firstFloorPos = new Vector3(0, 0.3, -4.8)
    secondFloorPos = new Vector3(0, 7.5, -4.8)

    constructor(pivotScene:Entity) {
        this.platform.addComponent(new GLTFShape("models/museum/elevator.glb"))
        this.platform.addComponent(new Transform({
            position: new Vector3(0, 0.3, -4.8)
        }))

        this.pivotScene = pivotScene
        this.platform.setParent(this.pivotScene)
    }

    movePlatform() {
        log("move platform up and down in sequence")
        this.platform.addComponent(new utils.MoveTransformComponent(this.firstFloorPos, this.secondFloorPos, 3, undefined, utils.InterpolationType.EASEOUTSINE))

        let delayEnt = new Entity()
        delayEnt.addComponent(new utils.Delay(6000, () => {
            this.platform.addComponent(new utils.MoveTransformComponent(this.secondFloorPos, this.firstFloorPos, 3, undefined, utils.InterpolationType.EASEOUTSINE))
        }))
        engine.addEntity(delayEnt)
    }
    update(dt: number) {

        let date = new Date().getUTCSeconds()

        //log(date)

        if (date % 12 === 0) {
            if (!this.startMove) {
                this.startMove = true
                log(date)
                this.movePlatform()
            }
        }
        else {
            this.startMove = false
        }
    }
}

export function addElevator(pivotScene:Entity) {
    const elevatorSys = new elevatorSystem(pivotScene)


    const triggerEntity = new Entity()
    triggerEntity.addComponent(new Transform({
        position: new Vector3(0, 7.5, 0)
    }))
    let triggerBox = new utils.TriggerBoxShape(new Vector3(14, 15, 14), Vector3.Zero())

    triggerEntity.addComponent(
        new utils.TriggerComponent(
            triggerBox, //shape
            {
                onCameraEnter: () => {
                    engine.addSystem(elevatorSys)
                },

                onCameraExit: () => {
                    engine.removeSystem(elevatorSys)
                },
                enableDebug: false
            }
        )
    )
    triggerEntity.setParent(pivotScene)
}