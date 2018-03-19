const item = {
  state: 0,
  id: '', 
  title: '',
  description: '', 
  assignedTo: '',
  created: '',
  started: '',
}

export default opts => {
  // validate opts
  
  return {...Object.create(item), ...opts}
}
