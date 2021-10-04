export function getFolders() {
    return (dispatch) => {
        fetch('/folders')
        .then(r=> {
          if (r.ok){
            r.json().then((folders) => dispatch({ type: "folder/getFolders", payload: folders}));
          }
        })
        }
    }

   