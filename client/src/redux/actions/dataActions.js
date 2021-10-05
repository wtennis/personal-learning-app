export function getFolders() {
    console.log('getFolders')

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
    console.log('getResources')
    return (dispatch) => {
        fetch('/resources')
        .then(r=> {
            if (r.ok){
            r.json().then((resources) => dispatch({ type: "data/getResources", payload: resources}));
            }
        })
        }
    }

export function getFolderContents(id) {
    return (dispatch) => {
        fetch(`/folder_contents/${id}`)
        .then(r=> {
        if (r.ok){
            r.json().then((contents) => dispatch({ type: "folder/getFolderContents", payload: {contents: contents, id: id}}));
        };
        })
        }
    }