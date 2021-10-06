
const initialState = {
    status: "idle", 
    data: null
  };
  
  export  function userReducer(state = initialState, action) {
    switch (action.type) {
        case "user/userLoaded":
            return {
                ...state,
                status: "loaded",
                data: action.payload,
            };
        case "user/userLoading":
            return {
                ...state,
                status: "loading",
            };
        case "user/noUser":
            return {
                data: null,
                status: "unfound",
            };        
        default:
            return state;
    }
  }
  
  
//   export function userReducer(state = false, action) {
//     switch (action.type) {
//         case "SET_USER": 
//         return {
//             ...state,
//             user: action.payload
//           }
//       default:
//         return state;
//     }
//   }