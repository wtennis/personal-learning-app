  
  export  function dataReducer(state = [], action) {
    switch (action.type) {
        case "folder/getFolders":
            return action.payload;
        default:
            return state;
    }
  }
  
