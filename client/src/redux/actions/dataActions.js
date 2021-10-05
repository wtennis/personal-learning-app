export function getFolders() {

    return (dispatch) => {
        fetch('/folders')
        .then(r=> {
          if (r.ok){
            r.json().then((folders) => dispatch({ type: "data/getFolders", payload: folders}));
          }
        })
        }
    }

export function getResources() {
    return (dispatch) => {
        fetch('/resources')
        .then(r=> {
            if (r.ok){
            r.json().then((resources) => dispatch({ type: "data/getResources", payload: resources}));
            }
        })
        }
    }
    
export function renameItem(target, id, newName) {
    return (dispatch) => {
        fetch(`/${target}/${id}`, {
            method: "PATCH", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: newName })
            })
            .then(r => {
                if (r.ok){
                    r.json().then((renamedItem) => dispatch({ type: "data/renameItem", payload: renamedItem}));
                }
            })
        }
    }