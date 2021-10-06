
const initialState = {
    loading: "idle", 
    data: null
  };
  
  export  function userReducer(state = initialState, action) {
    switch (action.type) {
        case "user/userLoaded":
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case "user/userLoading":
            return {
                ...state,
                loading: true,
            };
        case "user/noUser":
            return initialState;
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