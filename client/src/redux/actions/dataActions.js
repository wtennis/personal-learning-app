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

export function renameFolder(folderName, id) {
    return (dispatch) => {
        fetch(`/folders/${id}`, {
            method: "PATCH", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: folderName})
            })
            .then(r => {
                if (r.ok){
                    r.json().then((folder) => dispatch({ type: "data/renameFolder", payload: folder}));
                }
            })
        }
    }
    
    export function renameResource() {
        return (dispatch) => {
            // fetch(`/resources/${item.id}`, {
            //     method: "PATCH", 
            //     headers: {"Content-Type": "application/json"},
            //     body: JSON.stringify({
            //         name: itemName
            //     })
            //     })
            //     .then(r => {
            //         if (r.ok){
            //             r.json();
            //         }
            //     })
            }
        }