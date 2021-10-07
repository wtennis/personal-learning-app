
const initialState = {
    fetching: false, 
    content: null
  };
  
  export  function suggestionReducer(state = initialState, action) {
    switch (action.type) {
        case "fetchingSuggestion":
            return {
                ...state,
                fetching: true,
            };
        case "fetchedSuggestion":
            return {
                content: action.payload,
                fetching: false,
            };        
        default:
            return state;
    }
  }
  
  