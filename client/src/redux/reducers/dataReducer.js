  
  export  function dataReducer(state = [], action) {
    switch (action.type) {
        case "folder/getFolders":
            return action.payload;
        case "folder/getFolderContents":
            return state.map(folder => {
                if (folder.id === action.payload.id) {
                    return {...folder, contents: action.payload.contents}
                };
                    return folder;
            })
        default:
            return state;
        }
      }
      