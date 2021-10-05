  
  
  
  export  function dataReducer(state = [], action) {
    switch (action.type) {
        case "data/getFolders":
            return state.concat(action.payload)
        case "data/getResources":
            return state.concat(action.payload)
        case "folder/getFolderContents":
            return state.map(folder => {
                if (!folder.has_contents) {
                    return folder
                } 
                else if (folder.id === action.payload.id){
                    return {...folder, contents: action.payload.contents}
                }
                    return folder;
            });
        default:
            return state;
        }
      }
      