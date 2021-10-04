// const initialState = {
//     user: {}, //array of astronauts
//     status: "idle", //loading status for fetch
//   };
  
  export function userReducer(state = {}, action) {
    switch (action.type) {
        case "SET_USER": 
        return {
            ...state,
            user: action.payload
          }
      default:
        return state;
    }
  }