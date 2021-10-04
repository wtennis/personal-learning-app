  
  export  function dataReducer(state = [], action) {
    switch (action.type) {
        case "folder/getFolders":
            return action.payload;
        case "folder/getFolderContents":
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
  }
  
