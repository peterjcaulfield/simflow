const board = {
  name: '',
  lanes: [],
}

export default opts => {
  // validate opts
  
  return {...Object.create(board), ...opts}
}
