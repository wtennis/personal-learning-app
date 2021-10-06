  
// CHANGE THE ITEM ACTIONS TO SPECIFIC FOLDER/RESOURCE ACTIONS, SO YOU DON'T HAVE TO CHECK ID AND ITEM TYPE IN THE CASE/SWITCH STATEMENT

  export  function dataReducer(state = [], action) {
    switch (action.type) {
        case "data/getData":
            return action.payload
        case "data/getResources":
            return state.concat(action.payload)
        case "data/renameItem":
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
        case "data/deleteFolder":
            return state.filter((item) => item.url || item.id !== action.payload);
        case "data/deleteResource":
            return state.filter((item) => !item.url || item.id !== action.payload);
        case "data/updateNote":
            return state.map(item => {
                if (item.id === action.payload.id){
                    return {...item, note: action.payload.note}
                };
                    return item
            })
        default:
            return state;
        }
      }
      