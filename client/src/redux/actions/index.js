

export function getUser() {
    return (dispatch) => { 
      fetch('/me')
        .then(resp => resp.json())
        .then(data => {
          dispatch({ type: "SET_USER", payload: data})
        })
    }
  }


//    fetch('/me')
//   .then(r=> {
//     if (r.ok){
//       r.json().then((user) => {
//         setUser(user);
//         console.log(user)
//         setIsLoading(false);
//       });
//     }else{
//         setIsLoading(false);
//       }
//   })