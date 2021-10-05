  
  
  
  export  function dataReducer(state = [], action) {
    switch (action.type) {
        case "data/getFolders":
            return state.concat(action.payload)
        case "data/getResources":
            return state.concat(action.payload)
        case "data/renameFolder":
            return state.map(item => {
                if (item.name != action.payload.name){
                    return item
                } else {
                    return action.payload
                }
            })
        default:
            return state;
        }
      }
      