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

export function renameItem() {
    return (dispatch) => {
        // fetch(`/folders/${item.id}`, {
        //     method: "PATCH", 
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify({
        //         name: folderName,
        //         type: item.type
        //     })
        //     })
        //     .then(r => {
        //         if (r.ok){
        //             r.json();
        //         }
        //     })
        }
    }
    



// export function getFolderContents(id) {
//     return (dispatch) => {
//         fetch(`/folder_contents/${id}`)
//         .then(r=> {
//         if (r.ok){
//             r.json().then((contents) => dispatch({ type: "folder/getFolderContents", payload: {contents: contents, id: id}}));
//         };
//         })
//         }
//     }