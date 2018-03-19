const lane = {
  name: '',
  items: new Map(),
}

export default opts => {
  // validate opts
  
  return {...Object.create(lane), ...opts}
}
