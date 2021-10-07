
export function fetchSuggestion() {
    return (dispatch) => {
        dispatch({ type: "fetchingSuggestion" });
        fetch(`https://www.boredapi.com/api/activity?type=education`)
        .then(r=> {
            if (r.ok){
            r.json().then((s) => 
            dispatch({
                type: "fetchedSuggestion",
                payload: s.activity,
                })
            );
            }else{
                dispatch({
                    type: "fetchedSuggestion",
                    payload: "Think of something yourself!",
                    })
            }
        });
        }
    }


    export function getUser() {
        return function (dispatch) {
          dispatch({ type: "user/userLoading" });
            fetch("/me")
            .then(r=> {
                if (r.ok){
                r.json().then((user) => 
                dispatch({
                    type: "user/userLoaded",
                    payload: user,
                    })
                );
                }else{
                    dispatch({type: "user/noUser"})
                }
            });
            }
        }
    