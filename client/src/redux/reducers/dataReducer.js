  
  export  function dataReducer(state = [], action) {
    switch (action.type) {
        case "folder/getFolders":
            return {
                ...state,
                folders: action.payload
                };
        default:
            return state;
    }
  }
  
