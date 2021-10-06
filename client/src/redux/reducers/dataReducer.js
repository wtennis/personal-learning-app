  
// CHANGE THE ITEM ACTIONS TO SPECIFIC FOLDER/RESOURCE ACTIONS, SO YOU DON'T HAVE TO CHECK ID AND ITEM TYPE IN THE CASE/SWITCH STATEMENT

  export  function dataReducer(state = [], action) {
    switch (action.type) {
        case "data/getFolders":
            return state.concat(action.payload)
        case "data/getResources":
            return state.concat(action.payload)
        case "data/renameItem":
            console.log(action.payload)
            return state.map(item => {
                if (item.id === action.payload.id){
                    return {...item, name: action.payload.name}
                };
                    return item
            })
        case "data/createFolder":
            return [...state, action.payload]
        case "data/createResource":
            return [...state, action.payload]
        case "data/deleteItem":
            return state.filter((item) => item.id !== action.payload);
        case "data/createResourceNote":
            return state.map(item => {
                if (item.id === action.payload.id && item.url) {
                  return {...item, notes: item.notes.concat(action.payload.note)}
                };
                  return item;
              })
        case "data/createFolderNote":
        return state.map(item => {
            if (item.id === action.payload.id && !item.url) {
                return {...item, notes: item.notes.concat(action.payload.note)}
            };
                return item;
            })
              default:
            return state;
        }
      }
      