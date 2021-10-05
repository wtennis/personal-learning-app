  

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
        default:
            return state;
        }
      }
      