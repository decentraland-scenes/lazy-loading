Input.instance.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, true, (_e) => {
  log(`pos: `, Camera.instance.position)
  log(`rot: `, Camera.instance.rotation)
})
