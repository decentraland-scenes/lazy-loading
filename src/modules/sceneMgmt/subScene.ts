import { movePlayerTo } from '@decentraland/RestrictedActions'
import * as utils from '@dcl/ecs-scene-utils'
import { POISelectorType, SpawnPoint } from './types'
//import { nftCollection, Painting } from './nfts'

/*
per nico
  adding/removing to engine can be slower
    "after running some tests measuring hiccups in different scenarios, turns out that making entities invisible rather than removing them from the engine is a lot more efficient"
  
    it causes less hiccups and also the entities show a lot faster like this
    and I suppose we’d also avoid the issue that you reported with entities not appearing (I wasn’t able to reproduce that w my tests, though)
      it implies slightly more loading at the very beginning, but not too significant


    trade off are SHAPE_SHOW_HIDE still has active colliders
  
*/
export enum VisibilityStrategyEnum {
  ENGINE_ADD_REMOVE ,
  SHAPE_SHOW_HIDE 
}

const VAULT = new Transform({
  position:new Vector3(24,3,24), //where no one can walk
  scale: new Vector3(0,0,0) // not visible
})

export type EntityWrapperArgs={
  //matches?(action: string,showActionMgr:ShowActionManager):boolean,

  //onShow?(scene:SubScene):void,
  //onHide?(scene:SubScene):void,
  //hide?():void,
  onChangeEntityVisibility?(entity:BaseEntityWrapper,type:VisibleChangeType):void

  visibilityStrategy?:VisibilityStrategyEnum

  onInit?(entity:BaseEntityWrapper):void

}
export type SceneEntityArgs = EntityWrapperArgs & {
  onInit?(entity:SceneEntity,scene:SubScene):void,
}

export type EntityActionListener=((entityWrap:BaseEntityWrapper)=>void)

export class BaseEntityWrapper{
  name:string 
  visible:boolean=true

  //even though this object holds no entities directly, it is good to know the intent
  //for visiblity should it override the listeners onHide / onShow for how to react
  visibilityStrategy:VisibilityStrategyEnum = VisibilityStrategyEnum.SHAPE_SHOW_HIDE
  visibleTransformInfo?:Transform //if vault hide/showing

  initAlready:boolean=false

  onInitListener:EntityActionListener[] = [] //(scene:SubScene)=>void = []
  onShowListener:EntityActionListener[] = []
  onHideListener:EntityActionListener[] = []

  enabled:boolean=true
  
  constructor(name:string,args?:EntityWrapperArgs){
    this.name = name

    if(args && args.visibilityStrategy) this.visibilityStrategy = args.visibilityStrategy 
    if(args && args.onInit) this.addOnInitListener( args.onInit )
  }

  disable(){
    this.enabled = false
  }
  enable(){
    this.enabled = true
  }
  init(){
    if(!this.enabled){
      log("init() not enabled",this.name)
      return;
    }
    if(this.initAlready) return false;
  
    this.initAlready = true

    //log("ent.checking onInit!!!",this.name)
 
    if(this.onInit !== undefined){ 
      log("calling onInit!!!",this.name)
      this.onInit(this)
    }  


    return true;
  } 
   
 
  //onInit(entity:EntityWrapper) {}

  onChangeEntityVisibility(entity:BaseEntityWrapper,type:VisibleChangeType){ 
    switch(type){
      case 'hide':
        this.onHide(this);
        break;
      case 'show':
        log("onChangeEntityVisibility calling onShow",this.name,this.enabled)
        this.onShow(this);
        break;
    }
  }
  

  isVisible(){
    return this.visible
  }


  onHide(baseEntWrapper:BaseEntityWrapper){
    this.processListener(baseEntWrapper,this.onHideListener)
  } 
  onShow(baseEntWrapper:BaseEntityWrapper){
    log("baseclass.onShow",this.onShowListener)
    this.processListener(baseEntWrapper,this.onShowListener)
  } 
  onInit(baseEntWrapper:BaseEntityWrapper){
    log("baseclass.onInit",this.onInitListener)
    this.processListener(baseEntWrapper,this.onInitListener)
  }
  processListener(sceneEnt:BaseEntityWrapper,listeners:((sceneEnt:BaseEntityWrapper)=>void)[] ){
    if(!listeners) return
    for(const p in listeners){
      listeners[p](sceneEnt)
    } 
  }
  
  show(force?:boolean) {
    if(!this.initAlready) this.init()
    if(!this.enabled){
      log("show() not enabled",this.name)
      return;
    }

    if((force === undefined || !force ) && this.visible){
      log("show() already visible",this.name)
      return;
    }

    this.visible = true  
    this.onChangeEntityVisibility(this,'show')
  } 
 
  hide(force?:boolean) {
    if((force === undefined || !force ) && !this.visible){
      log("hide() already hidden",this.name)
      return;
    } 
    if(!this.enabled){
      log("hide() not enabled",this.name)
      return;
    }

    this.visible = false
    this.onChangeEntityVisibility(this,'hide')
  }

  addOnInitListener(listener:EntityActionListener){
    this.onInitListener.push(listener)
  }


  addOnShowListener(listener:EntityActionListener){
    this.onShowListener.push(listener)
  }

  addOnHideListener(listener:EntityActionListener){
    this.onHideListener.push(listener)
  }
}

export class EntityWrapper extends BaseEntityWrapper{
  
  rootEntity:Entity
  entities:Entity[]

  constructor(name:string,entity?:Entity|Entity[],args?:EntityWrapperArgs){
    super(name,args)

    if(Array.isArray(entity)){
      //const ent:Entity = entity as Entity
      this.rootEntity = entity[0]
      this.entities = entity
    }else if(entity !== undefined){
      this.rootEntity = entity
      this.entities = []
      this.entities.push( entity )
    }else{
      this.rootEntity = new Entity()
      this.entities = []
    }

    //if(args && args.visibilityStrategy) this.visibilityStrategy = args.visibilityStrategy 
    //if(args && args.onInit) this.onInit = args.onInit 
  }

  addEntity(entity:Entity){
    this.entities.push(entity)
  }
  onShow(){ 
    log("EntityWrapper","called onShow on",this.name,this.entities.length)
    const entity = this.rootEntity

    //if(this.name == 'closestTrack.debugUI') debugger

    this.showEntity(entity,false)

    if(this.entities){
      for(const p in this.entities){
        this.showEntity(this.entities[p],true)
      }
    }

    super.onShow(this)
  } 
 
  onHide(){
    log("EntityWrapper","called onHide",this.name,this.entities.length,this.visibilityStrategy)
    const entity = this.rootEntity
    
    this.hideEntity(entity,false)

    if(this.entities){
      for(const p in this.entities){
        this.hideEntity(this.entities[p],true)
      }
    }

    super.onHide(this)
  }

  private showEntity(entity:Entity,child:boolean){
    if(!entity) return

    log("EntityWrapper","showEntity called for ",entity.name,this.visibilityStrategy)    

    if( this.visibilityStrategy == VisibilityStrategyEnum.SHAPE_SHOW_HIDE){
      if (entity.hasComponent('engine.shape')) {
        log("XXXX showing",this.name)
        entity.getComponent('engine.shape').visible = true
        entity.getComponent('engine.shape').withCollisions = true
      }
      const transform = this.visibleTransformInfo
      if (!child && transform !== undefined) {
        entity.addComponentOrReplace(transform)
      } 
    }else{ 
      if (entity && !entity.alive) {
        engine.addEntity(entity)
      }
    }
  }
  private hideEntity(entity:Entity,child:boolean){
    if(!entity) return

    
    const hideShow = this.visibilityStrategy == VisibilityStrategyEnum.SHAPE_SHOW_HIDE
    //log("EntityWrapper","hideEntity called for ",entity.name,"hideShow",hideShow)
 
    if( hideShow ){
      if (entity.hasComponent('engine.shape')) {
        log("XXXX hiding",this.name)
        log("EntityWrapper","hideEntity.visible ",entity.name)
        entity.getComponent('engine.shape').visible = false
        entity.getComponent('engine.shape').withCollisions = false
      }
      if (!child && entity.hasComponent(Transform)) {
        const tf = entity.getComponent(Transform);
        if( tf !== VAULT){
          //FIXME this is a work around, if need to preserve position over time (moveUtils etc) this wont work
          this.visibleTransformInfo = entity.getComponent(Transform)
          entity.addComponentOrReplace(VAULT)
        }
      }
    }else{
      log("EntityWrapper","hideEntity remove from engine check ",entity.name,entity.alive)
      if (entity && entity.alive) {
        log("EntityWrapper","hideEntity.removing ",entity.name)
        engine.removeEntity(entity)
      }
    }
  }

}

export class SceneEntity extends EntityWrapper{
  constructor(name:string,entity:Entity|Entity[],args?:SceneEntityArgs){
    super(name,entity,args)
  } 

}

export type VisibleChangeType = 'show'|'hide'

//FIXME do not extend Entity
export class SubScene extends BaseEntityWrapper{
  public rootEntity?: Entity //if hierarchical
  public triggerEntity: Entity
  public initAlready:boolean = false
  public entities: SceneEntity[] // CONSIDER turn to record for instant lookup by name?
  public id: number
  public spawnPoints:SpawnPoint[]=[]
  
  constructor(
    id: number,
    name: string,
    entities: SceneEntity[],
    triggerPosition?: Vector3,
    triggerSize?: Vector3
    
  ) {
    super(name,undefined)

    log("constructor",id,name,entities)
 
    //engine.addEntity(this)

    
    this.id = id
    this.entities = entities
  
    this.triggerEntity = new Entity();
    engine.addEntity(this.triggerEntity)

    if(triggerPosition !== undefined){
      let triggerBox = new utils.TriggerBoxShape(triggerSize, triggerPosition)
      this.triggerEntity.addComponent(
        new utils.TriggerComponent(triggerBox, {
          onCameraEnter: () => {
            this.show()
          },
          onCameraExit: () => {
            this.hide()
          },
          // uncomment the line below to see the areas covered by the trigger areas
          //enableDebug: true,
        }) 
      )
    }
  } 
  
 
  addEntity(sceneEnt:SceneEntity|Entity,args?:SceneEntityArgs):SceneEntity{
    let retSceneEnt
    if(sceneEnt instanceof SceneEntity){
      retSceneEnt = sceneEnt
      this.entities.push(sceneEnt)
    }else{
      retSceneEnt = new SceneEntity( sceneEnt.name !== undefined ? sceneEnt.name : "undefined-scene-",sceneEnt,args)
      this.entities.push( retSceneEnt )
    }
    log("subscene.addEntity",this.entities,this.id)
    return retSceneEnt
  }

  onInit(sceneEnt:SubScene){
    super.onInit(sceneEnt)
  
    this.entities.forEach((entity) => {
      entity.init()
    })


  }

  randomSpawnPoint(spawnPointFilter?:POISelectorType):SpawnPoint{

    let list = this.spawnPoints
    
    if(spawnPointFilter !== undefined){
      list = list.filter(function(item) {
        return item.type === spawnPointFilter.type;
      });
    }

    log("randomSpawnPoint ",spawnPointFilter,list)

    let spawnPoint = list[ Math.floor( Math.random() * list.length ) ]

    return spawnPoint
  }

  movePlayerHere(spawnPointFilter?:POISelectorType|SpawnPoint){
    return new Promise((resolve, reject) => {
      //log("(spawnPointFilter as POISelectorType).type",(spawnPointFilter as POISelectorType).type,spawnPointFilter)

      let position:Vector3
      let cameraLook:Vector3|undefined = undefined
      if((spawnPointFilter === undefined || (spawnPointFilter as POISelectorType).type)){
        const spawnPoint = this.randomSpawnPoint(spawnPointFilter as POISelectorType)
 
        if(!spawnPoint || spawnPoint === undefined || spawnPoint.position === undefined){
          log(this.name+".movePlayerHere no spawnPoints. not moving player",this.spawnPoints)
          resolve()
          return
        }
        position = spawnPoint.position.toCenterVector3()
        cameraLook = spawnPoint.cameraLookAt
      }else if(spawnPointFilter !== undefined && spawnPointFilter instanceof SpawnPoint){
        if(spawnPointFilter.position === undefined){
          log(this.name+".movePlayerHere no spawnPoints. not moving player",this.spawnPoints)
          resolve()
          return
        }
        position = spawnPointFilter.position.toCenterVector3()
        cameraLook = spawnPointFilter.cameraLookAt
      }else{
        log(this.name+".movePlayerHere type not recognized spawnPointFilter. not moving player",spawnPointFilter)
          resolve()
          return
      }

      movePlayerTo(position,cameraLook).then(
        ()=>{
          log("player move to scene " ,this.name , "@",position, " complete")
          resolve()
        }
      ).catch(
        (reason:any)=>{
          log("player move to scene " ,this.name , "@",position, " FAILED",reason)
          reject(reason)
        }
      )
    });
  }
  
  
  onHide(scene:SubScene){
    log("subscene.onHide",this.id,this.name)
    super.onHide(scene)

    this.entities.forEach((entity) => {

      const handled = false
      //if(this.overrideHide !== undefined){

      //}
      if(!handled){
        entity.hide()
      }
    })

  }
  onShow(scene:SubScene){
    log("subscene.onShow",this.entities,this.id)
    super.onShow(scene);

    this.entities.forEach((entity) => {
      entity.show()
    })
  }
}


export class SubSceneGroup extends SubScene{
  //public id: number
  public scenes:SubScene[]=[]

  disable(){
    super.disable()
    this.scenes.forEach((scene) => {
      scene.disable()
    })
  }

  enable(){
    super.enable()
    this.scenes.forEach((scene) => {
      log("SubSceneGroup.enable",scene.name)
      scene.enable()
    })
  }


  init(){
    const val = super.init()
    this.scenes.forEach((scene) => {
      scene.init()
    })
    return val
  }


  onHide(scene:SubScene){
    log("SubSceneGroup.onHide",this.id,this.name)
    super.onHide(scene)

    this.scenes.forEach((scene) => {
      scene.hide()
    })

  }
  onShow(scene:SubScene){
    log("SubSceneGroup.onShow",this.entities,this.id)
    
    super.onShow(scene);

    this.scenes.forEach((scenes) => {
      scenes.show()
      
    })
  }
}