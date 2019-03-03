export default ({dispatch}) => next => action => {

  /* Handling usual actions */
  if(!action.payload || !action.payload.then){
    return next(action);
  }

  /* Handling resquests */
  action.payload.then((res) => {
    const newAction = { ...action, payload: res };
    dispatch(newAction);
  });

}