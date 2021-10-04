
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

    export function logOut() {
        return function (dispatch){
            fetch('/logout', {method: 'DELETE'})
                .then(() => dispatch({ type: "user/noUser" }));
            };
    }

    export function logIn(credentials) {
        return function (dispatch){
        fetch('/login', { 
            method: 'POST', 
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(credentials)
        }).then((r) => {
            if(r.ok){
            r.json().then(user => dispatch({ type: "user/userLoaded", payload: user }));
            };
        });
    }
}

    export function signUp(credentials) {
        return function (dispatch){
        fetch('/signup', { 
            method: 'POST', 
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(credentials)
        }).then((r) => {
            if(r.ok){
            r.json().then(user => dispatch({ type: "user/userLoaded", payload: user }));
            };
        });
    }
    }