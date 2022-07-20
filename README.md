# Lazy Loading

This is an optimized scene that only loads certain entities when the player approaches them. This reduces the scene load time, and also has less of an impact on framerate as the player moves through the scene.

![](screenshot/screenshot.gif)

Art galleries often include a lot of NFTs, which raises the material count and impacts performance considerably. Keep in mind that the material count only considers materials being used at a given time. Entities that are not currently being loaded aren't counted. The ideal solution is to not load everything at once, but instead to load and unload content that is indoors as the player enters the corresponding parts of the scene.

This scene includes multiple small buildings, each with a set of NFTs in it. Each of these buildings has a trigger area that loads its NFTs only when the player walks near it, and then hides them when the player walks away.

For easier maintenance, the scene lists all of the NFTs in the scene in an array, including data about their positions and what subScene they belong to. The scene then assigns these to their corresponding subScene and handles showing and hiding them when appropriate.

**Install the CLI**

Download and install the Decentraland CLI by running the following command

```bash
npm i -g decentraland
```

For a more details, follow the steps in the [Installation guide](https://docs.decentraland.org/documentation/installation-guide/).

**Previewing the scene**

Once you've installed the CLI, download this example and navigate to its directory from your terminal or command prompt.

_from the scene directory:_

```
$:  dcl start
```

Any dependencies are installed and then the CLI will open the scene in a new browser tab automatically.

Learn more about how to build your own scenes in our [documentation](https://docs.decentraland.org/) site.

## Class Diagram


```mermaid
classDiagram


SceneManager "*" o-- "1" SubScene : Manages SubScenes
SubScene "*" o-- "1" SceneEntity : Manages the scene entities
EntityWrapper "*" o-- "1" Entity : Manages the entity in unity
SceneEntity --|> EntityWrapper: extends
SubSceneGroup --|> SubScene: extends
SubScene --|> BaseEntityWrapper: extends


class SceneManager{
  scenes:SubScene[] = [] 
  generateSceneId():number
  getSceneById(id:number):SubScene|null
  addScene(scene:SubScene|SceneInitData):SubScene
  changeToScene(scene:SubScene)
  initScenes()
  hideScenes()
}

class BaseEntityWrapper{
  name:string 
  visible:boolean=true
  visibilityStrategy:VisibilityStrategyEnum = VisibilityStrategyEnum.SHAPE_SHOW_HIDE
  visibleTransformInfo?:Transform //if vault hide/showing
  initAlready:boolean=false

  onInitListener:EntityActionListener[] = [] //(scene:SubScene)=>void = []
  onShowListener:EntityActionListener[] = []
  onHideListener:EntityActionListener[] = []

  enabled:boolean=true
  
  disable()
  enable()
  init()
   
  onChangeEntityVisibility(entity:BaseEntityWrapper,type:VisibleChangeType)
  

  isVisible()


  onHide(baseEntWrapper:BaseEntityWrapper)
  onShow(baseEntWrapper:BaseEntityWrapper)
  onInit(baseEntWrapper:BaseEntityWrapper)
  processListener(sceneEnt:BaseEntityWrapper,listeners:((sceneEnt:BaseEntityWrapper)=>void)[] )
  show(force?:boolean) 
  hide(force?:boolean) 
  addOnInitListener(listener:EntityActionListener)
  addOnShowListener(listener:EntityActionListener)
  addOnHideListener(listener:EntityActionListener)
}
class EntityWrapper{
  rootEntity:Entity
  entities:Entity[]
  addEntity(entity:Entity)
  onShow()
  onHide()
}

class SceneEntity{
  
}

class SubScene {
  public rootEntity?: Entity 
  public triggerEntity: Entity
  public initAlready:boolean = false
  public entities: SceneEntity[]
  public id: number
  public spawnPoints:SpawnPoint[]=[]
  
 
  addEntity(sceneEnt:SceneEntity|Entity,args?:SceneEntityArgs):SceneEntity
  onInit(sceneEnt:SubScene)

  randomSpawnPoint(spawnPointFilter?:POISelectorType):SpawnPoint

  movePlayerHere(spawnPointFilter?:POISelectorType|SpawnPoint)
  
  
  onHide(scene:SubScene)
  onShow(scene:SubScene)
}


class SubSceneGroup{
  public scenes:SubScene[]=[]

  disable()
  enable()
  init()

  onHide(scene:SubScene)
  onShow(scene:SubScene)
}

```

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.
